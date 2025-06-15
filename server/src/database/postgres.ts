import { Pool } from 'pg'
import { Database } from '../types'
import { PostgresDialect, Kysely } from 'kysely'

const dialect = new PostgresDialect({
  pool: new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) ?? 5432
  })
});


export const database = new Kysely<Database>({
  dialect,
})