import { Router } from 'express'

export default interface RouterWebAppPort {
  router: Router
  routes: () => void
}
