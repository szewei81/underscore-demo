var app =  angular.module('demoApp', []);


app.controller('demoController', function ($scope) {
    
    $scope.datas = datas;
    
        
    $scope.results = _.findWhere($scope.datas, {gender: 'female'});
    
    //$scope.results = _.where($scope.datas, {gender: 'female'});
    
    
//    $scope.results = _.find($scope.datas, function(data){
//        return data.age > 50
//    })
    
//    $scope.results = _.filter($scope.datas, function(data){
//        return data.age < 30 && data.gender == 'female' 
//    });
    
//    $scope.results = _.reject($scope.datas, function(data){
//        return data.age > 50 
//    });  
    
//    $scope.results = _.every($scope.datas, function(data){
//        return data.friends 
//    }); 
    
//      $scope.results = _.str.capitalize('epeli');

    
    
});