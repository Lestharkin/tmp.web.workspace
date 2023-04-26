import DateUtil from '../../../shared/util/date.util'
import {
  Request,
  Response,
  City,
  Job,
  IndexViewWebAppPort,
  CityWebAppAdapterPort,
  JobWebAppAdapterPort,
  CityIndexViewEntity,
  IndexViewEntity,
  JobIndexViewEntity
} from './index-web-app-view.dependency'

export default class IndexWebAppView implements IndexViewWebAppPort {
  title = 'Jobs Web App'
  constructor (
    private readonly jobWebAppAdapter: JobWebAppAdapterPort,
    private readonly cityWebAppAdapter: CityWebAppAdapterPort
  ) { }

  index (req: Request, res: Response): void {
    const { page } = req.params
    const r = /[^0-9]/
    if (r.test(page)) {
      return res.redirect('/1')
    }
    const pag: number = (page != null) ? Number(page) : 1
    const jobList = this.jobWebAppAdapter.getJobs(pag)
    if (jobList.length === 0) {
      return res.redirect('/1')
    }
    const cityList = this.cityWebAppAdapter.getDefaultCities()
    const model: IndexViewEntity = {
      jobs: jobList.map((job: Job): JobIndexViewEntity => {
        const daysAgo: number = DateUtil.getInstance().getDaysFromDate(job.published)
        const published: string = (daysAgo === 1) ? 'Less than a day ago' : `${daysAgo} days ago`
        return {
          id: String(job.id),
          logo: job.logo,
          company: job.company,
          job: job.job,
          category: job.category.description,
          city: job.location.name,
          published
        }
      }),
      cities: cityList.map((city: City): CityIndexViewEntity => {
        return {
          id: String(city.id),
          name: city.name
        }
      }),
      page: pag,
      pages: 0
    }
    res.render('index', { data: model, title: this.title })
  }
}
