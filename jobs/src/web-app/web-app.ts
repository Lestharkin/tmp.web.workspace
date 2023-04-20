import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import RouterWebAppPort from './port/router-web-app.port'

export default class WebApp {
  #app: Application

  constructor (private readonly routerWebAppPort: RouterWebAppPort) {
    this.#app = express()
    this.#config()
    this.#routes()
  }

  #config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.#app.set('view engine', 'ejs')
    this.#app.set('view', path.join(__dirname, '../template'))
    this.#app.use(express.static(path.join(__dirname, '../public')))
  }

  #routes = (): void => {
    this.#app.use('/', this.routerWebAppPort.router)
    this.#app.use('*', this.routerWebAppPort.router)
  }

  start = (): void => {
    this.#app.listen(process.env.PORT, () => {
      const port = (process.env.PORT != null) ? process.env.PORT : 'undefined'
      const host = (process.env.HOST !== undefined) ? process.env.HOST : 'undefined'
      console.info(`SERVER: http://${host}:${port}`)
    })
  }
}
