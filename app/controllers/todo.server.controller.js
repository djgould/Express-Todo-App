'use strict';

var mongoose = require('mongoose'),
	Todo = mongoose.model('Todo');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.create = function(req, res) {
	console.log(req.body);
	var todo = new Todo(req.body);

	todo.save(function(err) {
		if(err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(todo);
		}
	});
};

exports.list = function(req, res) {
	var todos = Todo.find( function(err, todos, count) {
		res.json(todos);
	}).sort('-created');
};

exports.update = function(req, res) {
	var todo = req.todo;

	todo.content = req.body.content;

	todo.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}  else {
			res.json(todo);
		}
	});
};

exports.destroy = function(req, res) {
	var todo = req.todo;
	console.log(todo);
	todo.remove(function(err) {
		if (err) {
			res.status(400).send({
				message: getErrorMessage(err)
			})
		} else res.json(todo);
	})
};

exports.todoById = function(req, res, next, id) {
	Todo.findById(id, function(err, todo) {
		if(err) return next(err);
		if(!todo) return next('Failed to load todo ' + id);

		req.todo = todo;

		next();
	});
}