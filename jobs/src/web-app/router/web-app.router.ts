import { Router } from 'express'
import RouterWebAppPort from '../port/router-web-app.port'
import ViewWebAppPort from '../port/view-web-app.port'

export default class WebAppRouter implements RouterWebAppPort {
  router: Router

  constructor (private readonly viewWebAppPort: ViewWebAppPort) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.viewWebAppPort.index.bind(this.viewWebAppPort))
    this.router.get('/', this.viewWebAppPort.error.bind(this.viewWebAppPort))
  }
}
