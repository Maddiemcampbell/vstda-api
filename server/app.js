const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const tasks = [{
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
  res.status(200).send(tasks);
});

app.get('/api/TodoItems/:id', function (req, res) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i]['todoItemId'] == req.params.id) {
      res.send(tasks[i]);
    }
  }
});

app.post('/api/TodoItems', function (req, res) {
  for (let i = 0; i < tasks.length; i++) {
    if (req.body.todoItemId === tasks[i].todoItemId) {
      tasks[i] = req.body;
    } else {
      tasks.push(req.body);
    }
  };
  res.status(201).send(req.body);
});

app.delete('/api/TodoItems/:id', function (req, res) {
  var newTasks = [];
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i]['todoItemId'] == req.params.id) {
      newTasks = tasks.splice(i, 1);
      res.status(200).send(newTasks[i]);
    }
  }
})




module.exports = app;
