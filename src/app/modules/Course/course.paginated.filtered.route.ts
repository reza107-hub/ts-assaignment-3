import express from 'express'
import { courseControllers } from './course.controller'

const router = express.Router()

router.get('/', courseControllers.getAllCourses)

export const CoursePaginatedAndFilterRoute = router
