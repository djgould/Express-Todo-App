'use strict';

angular.module('todos').controller('todosController', ['$scope', '$http', 'Todos', 
	function($scope, $http, Todos) {

		$scope.create = function() {
			var todo = new Todos({
				content: this.content
			});

			//clear input
			this.content = '';
			$scope.todoForm.$setPristine();

			todo.$save(function(response) {
				$scope.todos.unshift(todo);
				$scope.todoForm.$setPristine();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.todos = Todos.query();
		};

		$scope.delete = function(todo) {
			console.log(todo);
			todo.$delete(function() {
				for(var i in $scope.todos) {
					if($scope.todos[i] == todo) {
						$scope.todos.splice(i, 1);
					}
				}
			});
		};

		$scope.update = function(todo) {
			todo.$update();
		}
	}]);