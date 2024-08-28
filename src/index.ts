import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import reviewRoutes from "./routes/reviewRoutes"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

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

app.use("/api/reviews", reviewRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`))

