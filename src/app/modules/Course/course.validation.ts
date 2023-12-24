import { z } from 'zod'

const TTagValidationSchema = z.object({
  name: z.string().trim(),
  isDeleted: z.boolean(),
})

const TCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().trim(),
    instructor: z.string().trim(),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(TTagValidationSchema),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    details: z.object({
      level: z.string().trim(),
      description: z.string().trim(),
    }),
  }),
})

export const CourseValidations = {
  TTagValidationSchema,
  TCourseValidationSchema,
}
