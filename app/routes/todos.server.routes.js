'use strict';

var todos = require('../../app/controllers/todo.server.controller.js');

module.exports = function(app) {
	app.route('/todos')
		.get(todos.list)
		.post(todos.create);

	app.route('/todos/:todoId')
		.put(todos.update)
		.delete(todos.destroy);

	app.param('todoId', todos.todoById);
}