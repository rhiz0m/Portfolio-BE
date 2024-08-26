import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import projectsRouter from "./routes/projects"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(morgan("tiny"))
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/projectsapi", projectsRouter)


