import dotenv from 'dotenv'
dotenv.config()

import './config/database'
import express, { Request, Response } from 'express'
import cors from 'cors'

const port = process.env.PORT || '3000'
const modules: string[] = ['books']
export const app = express()

app.use(express.json())
app.use(cors())

app.get(`/api/terms`, (req: Request, res: Response) => {
  res.status(200).json({ terms: 'Terms of service' })
})

app.listen(port, () => {
  console.log(`Api running on port ${port}`)
})

modules.forEach((moduleName) => {
  app.use(`/api/${moduleName}`, require(`./modules/${moduleName}/routes`))
})
