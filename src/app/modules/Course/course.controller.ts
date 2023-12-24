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
export const courseControllers = {
  createCourse,
}
