var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
var pool = require('./models/bs')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//PARA CONSULTAR TODOS LOS EMPLEADOS
pool.query("select * from empleados").then(function(resultados){
  console.log(resultados);
});


/* INSERTA NUEVO EMPLEADO 
var emp_nue = {
nombre: 'Matias',
apellido: 'Perez',
trabajo: 'Analista',
edad: '27',
salario:'300000',
mail: 'matias_perez@bignet.com'
}

pool.query("insert into empleados set ?",[emp_nue]).then(function(resultados){
  console.log(resultados);
});*/


// ACUTALIZA NUEVO EMPLEADO
/*var id = 23;
var salario = 100000;

pool.query("update empleados set salario = ? where id_emp = ? ",[salario,id]).then(function(resultados){
  console.log(resultados);
})*/

/* //BORRA EL NUEVO EMPLEADO
pool.query("delete from empleados where id_emp = ? ",[id]).then(function(resultados){
  console.log(resultados);
})
*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
