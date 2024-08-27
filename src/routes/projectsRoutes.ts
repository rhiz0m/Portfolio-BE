import { Router } from "express"
import { projects } from "../models/projectsModel"

const router = Router()

router.get("/", (req, res) => {
  res.status(200).send(projects)
})

export default router 