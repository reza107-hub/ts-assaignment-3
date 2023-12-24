import { Types } from 'mongoose'

export type TTag = {
  name: string
  isDeleted: boolean
}
export type TCourse = {
  title: string
  instructor: string
  categoryId: Types.ObjectId
  price: number
  tags: [TTag]
  startDate: string
  endDate: string
  language: string
  provider: string
  details: {
    level: string
    description: string
  }
}
