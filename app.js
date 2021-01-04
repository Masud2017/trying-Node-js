var express =require("express")
var app =express()
var logger = require("morgan")

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var modelRouter = require("./model/usersDb");


app.use(logger('dev'));
app.use('/index',indexRouter);
app.use("/users",usersRouter);
app.use("/",modelRouter);

app.listen("4444"|| "4444",()=>{})
