import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

class Database {

    public connect: DataSource

    constructor() {
        this.connect = this.database()
    }

    private database(): DataSource {

        console.log('Connecting to the database')
        
        return new DataSource({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT as number | undefined,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        })
    }
}

export default new Database().connect
