var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')
  logger = require('morgan')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))

var db = mongoskin.db('mongodb://@localhost:27017/arkham', {safe:true})

app.param('location', function(req, res, next, loc){
  req.location = loc
  return next()
})

app.param('ancient', function(req, res, next, ancient){
  req.ancientOne = ancient
  return next()
})

app.get('/', function(req, res, next) {
  res.send('please select a collection, e.g., /collections/messages')
})

app.post('/game/start', function(req, res,next) {
  res.send({x:1});
});

app.get('/locations', function(req, res, next) {
  db.collection('location').find({}, {limit:10}).toArray(function(e, results){
    if(e) return next(e);
    res.send(results);
  });
});

app.get('/encounters/:location', function(req, res, next) {
  db.collection('encounters').find({location:'circus'}, {limit:10}).toArray(function(e, results){
    if(e) return next(e);
    res.send(results);
  });
});

app.get('/ancients', function(req, res, next) {
  db.collection('ancients').find({}, {}).toArray(function(e, results) {
    if(e) return next(e);
    res.send(results);
  })
});

app.get('/ancients/:ancient', function(req, res, next) {
  db.collection('ancients').findOne({name:req.ancientOne}, function(e, results){
    if(e) return next(e);
    res.send(results);
  });
});

app.listen(3000, function(){
  console.log('Express server listening on port 3000')
})
