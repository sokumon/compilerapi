const express = require('express')
var bodyParser = require('body-parser')
var session = require("express-session")
var logger = require('morgan');
const path = require('path')
const cors =require('cors')
const app = express()
const port = 3000
const oneDay = 1000 * 60 * 60 * 24;

const compileRouter = require('./Routes/compile.js');
// const fileRouter = require('./Routes/hexfilegive.js');

app.use(logger('dev'));
// app.use(session({
//   secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//   saveUninitialized:true,
//   cookie: { maxAge: oneDay, expires: oneDay },
//   resave: true 
// }))
app.use(cors())
// app.use(express.static(__dirname + '/public/'));
// app.use(express.static(__dirname+"/"))
// app.set('views', __dirname + '/public/views');
// // app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use('/static', express.static(path.join(__dirname, '/public/')))
app.use(bodyParser.json());     // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }))

app.use("/compile",compileRouter)
// app.use("/getthefile",fileRouter)
// app.use("/compile",adminRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
