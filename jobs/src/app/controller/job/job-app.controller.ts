import { Job, JobAppControllerPort, JobAppModelPort } from './job-app-controller.dependency'

export default class JobAppController implements JobAppControllerPort {
  constructor (private readonly jobAppModel: JobAppModelPort) { }

  getJobs = (page: number): Job[] => {
    return this.jobAppModel.getJobs(page)
  }
}
