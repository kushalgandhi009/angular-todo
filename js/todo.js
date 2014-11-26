var todoApp = angular.module('todoApp', []);

todoApp.controller('todoCtrl', function($scope){
    $scope.todos = [
        {'text': 'Learn Angular JS', 'done': false},
        {'text': 'Learn backbone JS', 'done': false}
    ]
});