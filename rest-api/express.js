var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')

  var app = express()
  app.use(bodyParser())
  var db = mongoskin.db('mongodb://@localhost:27017/test', {safe:true})
