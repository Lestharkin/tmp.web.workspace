
import { Job, JobAppControllerPort, JobWebAppAdapterPort } from './job-web-app-adapter.dependency'

export default class JobWebAppAdapter implements JobWebAppAdapterPort {
  constructor (private readonly jobAppController: JobAppControllerPort) { }

  getJobs = (page: number): Job[] => {
    return this.jobAppController.getJobs(page)
  }

  getJobsByKeyword = (keyword: string, page: number): Job[] => {
    console.error(keyword + String(page), 'Not implemented')
    return []
  }

  getJobsByCity = (name: string, page: number): Job[] => {
    console.error(name + String(page), 'Not implemented')
    return []
  }

  getJobsByZip = (code: string, page: number): Job[] => {
    console.error(code + String(page), 'Not implemented')
    return []
  }

  getJobsByCategory = (id: number, page: number): Job[] => {
    console.error(String(id) + String(page), 'Not implemented')
    return []
  }

  getJobById = (id: number): Job | null => {
    console.error(String(id), 'Not implemented')
    return null
  }
}
