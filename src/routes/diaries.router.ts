import express from 'express'
import { DiaryIdSchema, NewDiarySchema } from '../schemas/diaries.schemas'
import DiariesService from '../services/diaries.services'

const diariesService = new DiariesService()

const router = express.Router()

// Request: params, any, body, query

router.get('/', (_request, response) => {
  const diaries = diariesService.getAll()
  response.status(200).json(diaries)
})

router.get('/:id', (request, response, next) => {
  try {
    const DiaryId = DiaryIdSchema.parse(parseInt(request.params.id))
    const diary = diariesService.findOne(DiaryId)
    response.status(200).json(diary)
  } catch (error: any) {
    next(error)
  }
})

router.post('/', (request, response, next) => {
  try {
    const newDiary = NewDiarySchema.parse(request.body)

    const diary = diariesService.create(newDiary)
    response.status(201).json(diary)
  } catch (error: any) {
    next(error)
  }
})

router.delete('/:id', (request, response, next) => {
  try {
    const DiaryId = DiaryIdSchema.parse(parseInt(request.params.id))
    const message = diariesService.deleteOne(DiaryId)
    response.status(201).json({ message })
  } catch (error: any) {
    next(error)
  }
})

export default router
