import { Job } from './job-app-controller.dependency'

export default interface JobAppControllerPort {
  getJobs: (page: number) => Job[]
}
