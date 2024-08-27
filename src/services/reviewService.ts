import { v4 as uudiv4 } from "uuid"
import { Review } from "../models/reviewModel"

export const createReview = (
  title: string,
  comment: string,
  author: string
): Review => {
  return {
    id: uudiv4(),
    title,
    date: new Date(),
    comment,
    author,
  }
}
