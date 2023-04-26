import { Job } from './job-app-model.dependency'

export default interface JobAppModelPort {
  getJobs: (page: number) => Job[]
}
