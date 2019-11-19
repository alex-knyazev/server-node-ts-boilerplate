import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import { applyRoutesToApp } from './routes'

function getRestAppInstance(): express.Express {
  const app: express.Express = express()

  app.use(bodyParser.json())
  app.use(cors())

  // const authMiddlewares = getAuthMiddlewares()
  // authMiddlewares.forEach((middleware) => {
  //   app.use(middleware)
  // })

  applyRoutesToApp(app)

  return app
}

export { getRestAppInstance }
