import { z } from 'zod'
import { Visibility, Weather } from './enums'

// type Visibility = z.infer<typeof visibilitySchema>

export const DiarySchema = z.object({
  id: z.number().int().nonnegative(),
  date: z.string(),
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  comment: z.string().max(100)
})

export const DiaryIdSchema = DiarySchema.shape.id
export const NonSensitiveInfoDiarySchema = DiarySchema.omit({ comment: true })
export const NewDiarySchema = DiarySchema.omit({ id: true })

// Schema types:
export type Diary = z.infer<typeof DiarySchema>
export type NonSensitiveInfoDiary = z.infer<typeof NonSensitiveInfoDiarySchema>
export type NewDiary = z.infer<typeof NewDiarySchema>
