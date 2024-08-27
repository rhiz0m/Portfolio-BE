import { Request, Response } from "express"
import { createReview } from "../services/reviewService"

export const addReview = (req: Request, res: Response) => {
  const { title, comment, author } = req.body
  const newReview = createReview(title, comment, author)
  // TODO : postgreSQL
  res.status(201).json(newReview)
}
