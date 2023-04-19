import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'

export default class WebApp {
  #app: Application

  constructor () {
    this.#app = express()
    this.#config()
  }

  #config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.#app.set('view engine', 'ejs')
    this.#app.set('view', path.join(__dirname, '../template'))
    this.#app.use(express.static(path.join(__dirname, '../public')))
  }

  start = (): void => {
    this.#app.listen(process.env.PORT, () => {
      const port = (process.env.PORT != null) ? process.env.PORT : 'undefined'
      const host = (process.env.HOST !== undefined) ? process.env.HOST : 'undefined'
      console.info(`SERVER: http://${host}:${port}`)
    })
  }
}
