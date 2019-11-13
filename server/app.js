const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));

let tasks = [{
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];

app.get('/', function (req, res) {
  res.status(200).send({
    status: 'ok'
  });
});


app.get('/api/TodoItems', function (req, res) {
    console.log('req.params.number', req.params.number);
  res.status(200).send(tasks);
});


module.exports = app;
