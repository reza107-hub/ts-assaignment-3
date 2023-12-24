import { Router } from 'express'
import { CategoryRoutes } from '../modules/Category/category.route'
import { CourseRoute } from '../modules/Course/course.route'
import { CoursePaginatedAndFilterRoute } from '../modules/Course/course.paginated.filtered.route'
import { reviewRoute } from '../modules/Review/review.route'
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
  {
    path: '/courses',
    route: CoursePaginatedAndFilterRoute,
  },
  {
    path: '/reviews',
    route: reviewRoute,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
