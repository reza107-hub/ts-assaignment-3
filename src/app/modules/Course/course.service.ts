/* eslint-disable @typescript-eslint/no-explicit-any */
import { allowedSortFields } from './course.constant'
import { SortOrder, TCourse } from './course.interface'
import { Course } from './course.model'

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload)
  return result
}


const getPaginatedAndFilterCoursesFromDB = async (
  query: Record<string, any>,
) => {
  const { page = 1, limit = 10, sortBy, sortOrder, minPrice, maxPrice } = query

  if (sortBy && !allowedSortFields.includes(sortBy as string)) {
    throw new Error(
      `Invalid sortBy field. Allowed fields are: ${allowedSortFields.join(
        ', ',
      )}`,
    )
  }
  const sortOptions: [string, SortOrder][] = []
  if (sortBy) {
    sortOptions.push([sortBy as string, sortOrder as SortOrder])
  }
  const priceFilter: Record<string, any> = {}
  if (minPrice !== undefined) {
    priceFilter.price = { $gte: parseFloat(minPrice as string) }
  }
  if (maxPrice !== undefined) {
    priceFilter.price = {
      ...priceFilter.price,
      $lte: parseFloat(maxPrice as string),
    }
  }

  const skip = (page - 1) * limit
  const result = await Course.find(priceFilter)
    .sort(sortOptions)
    .skip(skip)
    .limit(parseInt(limit as string))
  const totalCourse = await Course.find()
  return { result, limit, page, total: totalCourse.length }
}
export const courseService = {
  createCourseIntoDB,
  getPaginatedAndFilterCoursesFromDB,
}
