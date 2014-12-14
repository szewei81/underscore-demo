var app =  angular.module('demoApp', ['underscore']);


app.controller('demoController', function ($scope, _) {
    
    $scope.comments = [
        { author: 'Simon', message: 'Hello!!!!', date: 1395216000000 },
        { author: 'Peter', message: 'What!!!!!', date: 1398400512000 },
        { author: 'Lisa', message: 'Oh Shit!!!!!', date: 1402516524000 }
    ];
    $scope.results = _.find($scope.comments, function(commemt){
        return commemt.author = "Simon"
    })
});