import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"


config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local'
})


export default defineConfig({
  schema: "src/drizzle/schema.ts",
  dialect: "postgresql",
  out: "src/drizzle/migrations",
  dbCredentials: {
    url: process.env.DB_URL!
  }
})
