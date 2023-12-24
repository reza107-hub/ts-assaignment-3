import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidations } from './course.validation'
import { courseControllers } from './course.controller'

const router = express.Router()

router.post(
  '/',
  validateRequest(CourseValidations.TCourseValidationSchema),
  courseControllers.createCourse,
)

export const CourseRoute = router
