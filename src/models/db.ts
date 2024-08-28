import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

export const sequalize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string, 
{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as "postgres",
    logging: false
}
)