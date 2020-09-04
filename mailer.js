const dotenv = require("dotenv").config()
const express = require("express")
const nodemailer = require("nodemailer")
bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {

    user: process.env.GMAIL,
    pass: process.env.PASSWORD,
  },
})
app.post("/contact", function(req, res) {

  const output = `
<p>Name: ${req.body.name}</p>
</br>
<p>Email: ${req.body.email}</p>
    </br>
    <p>Subject: ${req.body.subject}</p>
    </br>
    <p>Message: ${req.body.message}</p>
`

  mailer.sendMail(
    {
      from: req.body.email,
      to: process.env.GMAIL,
      subject: "new contact from website",
      html: output || "[No message]",
    },
    function(err, info) {
      if (err) return res.status(500).send(err)
      // res.send(`<h1>Thank You ${req.body.name} Message Sent!</h1>`)
      // res.redirect('http://localhost:8000/'
      res.json({mes:'message success'})
    },

  )
})
app.listen(3000, () => console.log("mail server running"))