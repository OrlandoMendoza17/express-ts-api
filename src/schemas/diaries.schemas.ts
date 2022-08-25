import { z } from 'zod'
import { Visibility, Weather } from './enums'

// type Visibility = z.infer<typeof visibilitySchema>

const DiarySchema = z.object({
  id: z.number().int().nonnegative(),
  date: z.string(),
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  comment: z.string().max(100)
})

export const NonSensitiveInfoDiarySchema = DiarySchema.omit({ comment: true })
export const NewDiarySchema = DiarySchema.omit({ id: true })

// schema types:
export type NonSensitiveInfoDiaryEntry = z.infer<typeof NonSensitiveInfoDiarySchema>
export type NewDiaryEntry = z.infer<typeof NewDiarySchema>
export type DiaryEntry = z.infer<typeof DiarySchema>
