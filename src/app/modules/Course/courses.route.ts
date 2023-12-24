import express from 'express'
import { courseControllers } from './course.controller'

const router = express.Router()

router.get('/', courseControllers.getAllCourses)
router.get('/:courseId/reviews', courseControllers.getCourseWithReview)

export const CoursesRoute = router
