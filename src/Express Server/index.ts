import express from "express"
import { Send } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"

const app = express()
const port = 3000
app.use(morgan("tiny"))

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send(posts)
  console.log(req.body)
})

app.post("/submit", (req, res) => {
  console.log(req.body)
})

app.put("/projects/web", (req, res) => {
  res.status(200).send({
    id: 5,
    title: "Next.JS. Project",
    date: "2024-08-20",
    content: "This is an Next.JS-project",
    author: "Andreas",
  })
})

app.patch("/projects/web", (req, res) => {
  res.status(200).send({
    id: 6,
    title: "Classic Javascript. Project",
    date: "2024-08-20",
    content: "This is a Javascript project",
    author: "Andreas",
  })
})

app.delete("/projects/web", (req, res) => {
  res.status(200).send({
    id: 0,
    title: "",
    date: "",
    content: "",
    author: "",
  })
})

app.listen(port, () => {
  console.log(`server running on ${port}`)
})

let posts = [
  {
    id: 1,
    title: "React. FE-Project",
    date: "2024-08-20",
    content:
      "This is a Front End project where I used an React-app to connect with the Backend",
    author: "Andreas",
  },
  {
    id: 2,
    title: "Node/Express. Project",
    date: "2024-08-20",
    content:
      "This is a Back End project where I used an Node and Express to connect with the Front End",
    author: "Andreas",
  },
  {
    id: 3,
    title: "IOS. Project",
    date: "2024-08-20",
    content: "This is an IOS-project where I used Swift and SwiftUI",
    author: "Andreas",
  },
]
