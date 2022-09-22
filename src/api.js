const express = require('express')
const app = express();
const serverless = require('serverless-http');
const database = require('../config/db.config')
const port = 3000
const cors = require('cors');
const testimonialRoute =  require('../routes/testimonialRoute')
database();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE" ,
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  allowedHeaders:"Origin, X-Requested-With, Content-Type, Accept, loggedinuseruid"
}));
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use('/testimonial' , testimonialRoute)

app.use(`/.netlify/functions/api/testimonial`, testimonialRoute);
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
module.exports.handler = serverless(app);
module.exports = app