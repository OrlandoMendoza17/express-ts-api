import express from "express"

const app = express()

app.use(express.json())

const PORT = 3000

app.get("/", (_request, response) => {
  response.status(200).json({
    message: "It works!"
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})