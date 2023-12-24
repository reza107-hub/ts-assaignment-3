import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { courseService } from './course.service'

const createCourse = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await courseService.createCourseIntoDB(payload)

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Course created successfully',
    data: result,
  })
})


const getAllCourses = catchAsync(async (req, res) => {
  // console.log(req.query)
  const { result, limit, page, total } =
    await courseService.getPaginatedAndFilterCoursesFromDB(req.query)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Courses retrieved successfully',
    meta: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: total,
    },
    data: result,
  })
})


export const courseControllers = {
  createCourse,
  getAllCourses,
}
