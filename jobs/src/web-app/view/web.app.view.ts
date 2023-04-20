import { Request, Response } from 'express'
import JobAdapterWebAppPort from '../port/job-adapter-web-app.port'
import ViewWebAppPort from '../port/view-web-app.port'

export default class WebAppView implements ViewWebAppPort {
  title = 'Jobs Web App'
  constructor (private readonly jobAdapterWebAppPort: JobAdapterWebAppPort) {}

  index (_req: Request, res: Response): void {
    const model = {
      jobs: this.jobAdapterWebAppPort.getJobs(1)
    }
    res.render('index', { data: model })
  }

  error (_req: Request, res: Response): void {
    res.status(404).send('404 Not Found')
  }
}
