import { Router } from "express"
import { projects } from "../models/projects"

const router = Router()

router.get("/projects", (req, res) => {
  res.status(200).send(projects)
})

export default router 