import JobControllerPort from '../../app/port/controller/job-controller.port'
import Job from '../../domain/Job.domain'
import JobAdapterWebAppPort from '../port/job-adapter-web-app.port'

export default class JobWebAppAdapter implements JobAdapterWebAppPort {
  constructor (private readonly jobControllerPort: JobControllerPort) { }

  getJobs = (page: number): Job[] => {
    return this.jobControllerPort.getJobs(page)
  }

  getJobsByKeyword = (keyword: string, page: number): Job[] => {
    return this.jobControllerPort.getJobsByKeyword(keyword, page)
  }

  getJobsByCity = (name: string, page: number): Job[] => {
    return this.jobControllerPort.getJobsByCity(name, page)
  }

  getJobsByZip = (code: string, page: number): Job[] => {
    return this.jobControllerPort.getJobsByZip(code, page)
  }

  getJobsByCategory = (id: number, page: number): Job[] => {
    return this.jobControllerPort.getJobsByCategory(id, page)
  }

  getJobById = (id: number): Job | null => {
    return this.jobControllerPort.getJobById(id)
  }
}
