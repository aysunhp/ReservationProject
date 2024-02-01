const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()
require("./src/config/db")
const router = require('./src/routes/userRouter')
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use("/",router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})