var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/** session */
var session = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** sequelize code */
var env = app.get('env');
var config = require(__dirname + '/config/config.json')[env];
console.log("執行環境: " + env);

var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
        logging: console.log,
        define: {
            timestamps: false
        }
    }
);
sequelize.authenticate().then(function(err) {
    console.log('連線成功.');
}).catch(function(err) {
    console.log('無法連線到資料庫.', err);
});
/** sequelize end */

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'fjqwie;jf2309j jljlalmfewa[pef0[32kf2ninj12b32b,m,ndfadiuiur20ir23jlkrjk2j3nrmnm2n3mnrmnwfjf',
  cookie: { maxAge: 60 * 1000 },
  resave: true,
  saveUninitialized: true,
}));

var index = require('./routes/index');
var auth = require('./routes/auth');

app.use('/', index);
app.use('/auth', auth);

// 抓取 404 錯誤 以及 轉遞錯誤給錯誤管理者 catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
