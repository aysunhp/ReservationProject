const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()
require("./src/config/db")
const userRouter = require('./src/routes/userRouter')
const hotelRouter = require('./src/routes/hotelRouter')
const roomRouter = require('./src/routes/roomRouter')
const reviewRouter = require('./src/routes/reviewRouter')

const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use("/",userRouter)
app.use("/hotels",hotelRouter)
app.use("/rooms",roomRouter)
app.use("/reviews",reviewRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})