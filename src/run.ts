import config from 'config'
import http from 'http'
import { DataConnectionManager } from './model'
import { getRestAppInstance } from './restApp'

const run = async (): Promise<void> => {
  console.log('Starting...')

  let dataConnectionManager: DataConnectionManager
  try {
    dataConnectionManager = new DataConnectionManager()
    await dataConnectionManager.init()
  } catch (error) {
    console.error(error)
    return
  }

  // get instance of node.js REST application
  const restAppInstance = getRestAppInstance()

  const httpServer: http.Server = new http.Server(restAppInstance)
  const httpHost: string = config.get('HTTP_SERVER_HOST')
  const httpPort: number = parseInt(config.get('HTTP_SERVER_PORT'), 10)
  httpServer.listen(httpPort, httpHost)

  httpServer.on('listening', async () => {
    console.log('APP VERSION', config.get('appVersion'))
    console.log(`- Server started on port ${httpPort} on env ${process.env.NODE_ENV} \n`)
  })

  httpServer.on('error', (e: Error) => {
    console.log(`Error starting server ${e}`)
  })
}

export default run
