'use strict';

angular.module('todos').factory('Todos', ['$resource', function($resource) {
	return $resource('/todos/:todoId', {
		todoId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);