import express from 'express'
import { getEntries } from '../services/diaries.services'

const router = express.Router()

router.get('/', (_request, response) => {
  const diaries = getEntries()
  response.status(200).json(diaries)
})

export default router
