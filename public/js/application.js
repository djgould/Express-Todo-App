var mainApplicationModuleName = 'todo-app';

var app = angular.module(mainApplicationModuleName, ['ngResource', 'todos']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
})