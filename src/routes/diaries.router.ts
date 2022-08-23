import express from 'express'
import DiariesService from '../services/diaries.services'
import { toNewDiary } from '../utils'

const diariesService = new DiariesService()

const router = express.Router()

router.get('/', (_request, response) => {
  const diaries = diariesService.getAll()
  response.status(200).json(diaries)
})

router.get('/:id', (request, response) => {
  try {
    const diary = diariesService.findOne(parseInt(request.params.id))
    response.status(200).json(diary)
  } catch (error: any) {
    response.status(400).json({
      message: error.message
    })
  }
})

router.post('/', (request, response) => {
  try {
    const newDiary = toNewDiary(request.body)
    const diary = diariesService.create(newDiary)
    response.status(201).json(diary)
  } catch (error: any) {
    response.status(400).json({
      message: error.message
    })
  }
})

router.delete('/:id', (request, response) => {
  try {
    const message = diariesService.deleteOne(parseInt(request.params.id))
    response.status(201).json({ message })
  } catch (error: any) {
    response.status(400).json({
      message: error.message
    })
  }
})

export default router
