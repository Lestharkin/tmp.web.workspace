import { Router } from 'express'
import RouterWebAppPort from '../port/router-web-app.port'

export default class WebAppRouter implements RouterWebAppPort {
  router: Router

  constructor () {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/')
  }
}
