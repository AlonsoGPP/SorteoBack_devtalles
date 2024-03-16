import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
    DISCORD_CLIENT_ID: get('DISCORD_CLIENT_ID').required().asString(),
    DISCORD_CLIENT_SECRET: get('DISCORD_CLIENT_SECRET').required().asString(),
    DISCORD_CLIENT_REDIRECT: get('DISCORD_CLIENT_REDIRECT').required().asUrlString(),
    PORT: get('PORT').required().asPortNumber(),
    MONGO_URL: get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
    JWT_SEED:get('JWT_SEED').required().asString(),
}