import { Request, Response } from 'express'
export default interface ViewWebAppPort {
  title: string
  index: (req: Request, res: Response) => void
  error: (req: Request, res: Response) => void
}
