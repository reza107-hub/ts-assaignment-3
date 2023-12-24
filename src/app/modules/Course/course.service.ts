/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCourse } from './course.interface'
import { Course } from './course.model'

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload)
  return result
}


const getPaginatedAndFilterCoursesFromDB = async (
  query: Record<string, any>,
) => {
  const { page = 1, limit = 10 } = query

  const skip = (page - 1) * limit

  const result = await Course.find()
    .skip(skip)
    .limit(parseInt(limit as string))

  return result
}

export const courseService = {
  createCourseIntoDB,
  getPaginatedAndFilterCoursesFromDB,
}
