import express from 'express'
import { errorHandler, httpErrorHandler, zodErrorHandler } from './middleware/error.handlers'
import diariesRouter from './routes/diaries.router'

const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.get('/', (_request, response) => {
  response.status(200).json({
    message: 'It works on TYPESCRIPT!'
  })
})

app.use('/api/diaries', diariesRouter)

app.use(zodErrorHandler)
app.use(httpErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT} with typescript`)
  // console.clear()
})
