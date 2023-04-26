import { Router, WebAppRouterPort, IndexWebAppViewPort, ErrorWebAppViewPort } from './web-app-router.dependency'

export default class WebAppRouter implements WebAppRouterPort {
  router: Router

  constructor (
    private readonly indexWebAppView: IndexWebAppViewPort,
    private readonly errorWebAppView: ErrorWebAppViewPort
  ) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.indexWebAppView.index.bind(this.indexWebAppView))
    this.router.get('/:page', this.indexWebAppView.index.bind(this.indexWebAppView))
    this.router.get('/', this.errorWebAppView.error.bind(this.errorWebAppView))
  }
}
