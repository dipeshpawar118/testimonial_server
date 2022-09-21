const express = require('express')
const app = express();
const database = require('./config/db.config')
const port = 3000

const testimonialRoute =  require('./routes/testimonialRoute')
database();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use('/testimonial' , testimonialRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})