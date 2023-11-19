var express = require('express')

var path = require('path')

var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.join(__dirname, 'dist/todo-app')))

app.listen(3000)
console.log('listening on port 3000');
