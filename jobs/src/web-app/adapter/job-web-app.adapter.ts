import JobController from '../../app/controller/job.controller'
import Job from '../../domain/Job.domain'
import JobAdapterWebAppPort from '../port/job-adapter-web-app.port'

export default class JobWebAppAdapter implements JobAdapterWebAppPort {
  constructor (private readonly jobController: JobController) { }

  getJobs = (page: number): Job[] => []
  getJobsByKeyword = (keyword: string, page: number): Job[] => []
  getJobsByCity = (name: string, page: number): Job[] => []
  getJobsByZip = (code: string, page: number): Job[] => []
  getJobsByCategory = (id: number, page: number): Job[] => []
  getJobById = (id: number): Job | null => null
}
