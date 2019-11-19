import mongoose from 'mongoose'
import config from 'config'

class DataConnectionManager {
  private dbUrl: string
  private connection: typeof mongoose

  public constructor() {
    const DBPath = `mongodb://${process.env.DB_PORTS.split(',')
      .map((port) => `${process.env.DB_HOST}:${port}`)
      .join(',')}`

    const dbUrl = `${DBPath}/${config.get('DB_NAME')}-${config.get('NODE_ENV')}`
    if (!dbUrl) {
      throw new Error('DB Params not provided to DataConnectionManager')
    }
    this.dbUrl = dbUrl
  }

  public async init(): Promise<void> {
    try {
      this.connection = await mongoose.connect(this.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  public async close(): Promise<void> {
    if (this.connection) {
      await mongoose.connection.close()
    }
  }
}

export { DataConnectionManager }
