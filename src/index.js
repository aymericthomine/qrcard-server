const express = require('express')
const { PrismaClient } = require('@prisma/client')
const path = require('path')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get(`/users/:id`, async (req, res) => {
  const { id } = req.params
  const users = await prisma.user.findUnique({
    where: { 
    id: Number(id),
    },
  })
  res.json(users.card);
})

app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  })
  res.json(result)
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${PORT}\n⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`,
  ),
)
