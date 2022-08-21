import express from "express"
import diariesRouter from "./routes/diaries"

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.get("/", (_request, response) => {
  response.status(200).json({
    message: "It works on TYPESCRIPT!"
  })
})

app.use("/diaries", diariesRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} with typescript`)
})