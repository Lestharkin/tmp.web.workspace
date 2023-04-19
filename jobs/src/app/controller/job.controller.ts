import Job from '../../domain/Job.domain'
import JobControllerPort from '../port/job-controller.port'

export default class JobController implements JobControllerPort {
  getJobs = (page: number): Job[] => []
  getJobsByKeyword = (keyword: string, page: number): Job[] => []
  getJobsByCity = (name: string, page: number): Job[] => []
  getJobsByZip = (code: string, page: number): Job[] => []
  getJobsByCategory = (id: number, page: number): Job[] => []
  getJobById = (id: number): Job | null => null
}
