import Job from '../domain/types/job.interface'
import JobDAO from '../domain/repository/dao/job/job-dao.interface'

export default class JobJson implements JobDAO<Job> {
  getById = (): Job => {}
  getAll = (): Job[] => {}
  save = (data: Job): Job => {}
  update = (id: string, data: Job): Job => {}
  delete = (id: string): Job => {}
}
