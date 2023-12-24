import { Router } from 'express'
import { CategoryRoutes } from '../modules/Category/category.route'
import { CourseRoute } from '../modules/Course/course.route'
const router = Router()

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/course',
    route: CourseRoute,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
