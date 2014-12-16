var app =  angular.module('demoApp', []);


app.controller('demoController', function ($scope) {
    
    $scope.datas = datas;

    $scope.results = _.chain($scope.datas)
        .pluck('friends')
        .flatten(true)
        .pluck('name')
        .value();

});