var app =  angular.module('demoApp', []);


app.controller('demoController', function ($scope) {
    
    $scope.datas = [{"age":52,"name":"Cote Shepard","gender":"male","email":"coteshepard@imaginart.com","phone":"+1 (850) 442-3426","friends":[{"name":"Vanessa Blair"},{"name":"Hooper Sears"},{"name":"Melisa Fox"}]},{"age":72,"name":"Miranda Quinn","gender":"male","email":"mirandaquinn@imaginart.com","phone":"+1 (958) 586-2805","friends":[{"name":"Holly Dunn"},{"name":"Cathryn Ashley"},{"name":"Pansy Phillips"}]},{"age":21,"name":"Clements Dodson","gender":"male","email":"clementsdodson@imaginart.com","phone":"+1 (806) 517-3941","friends":[{"name":"Sherrie Gordon"},{"name":"Joyce Webster"},{"name":"Allison Head"}]},{"age":32,"name":"Traci Murray","gender":"female","email":"tracimurray@imaginart.com","phone":"+1 (965) 539-2572","friends":[{"name":"Joseph Hyde"},{"name":"Roth Richmond"},{"name":"Esther Pace"}]},{"age":42,"name":"Cardenas Kline","gender":"male","email":"cardenaskline@imaginart.com","phone":"+1 (882) 447-3148","friends":[{"name":"Whitney Randall"},{"name":"Elaine Cruz"},{"name":"Gilbert Garner"}]},{"age":54,"name":"Dee Ford","gender":"female","email":"deeford@imaginart.com","phone":"+1 (993) 551-3099","friends":[{"name":"Morgan Weaver"},{"name":"Isabella Ross"},{"name":"Harris Mooney"}]},{"age":35,"name":"Hilary Bauer","gender":"female","email":"hilarybauer@imaginart.com","phone":"+1 (863) 460-3532","friends":[{"name":"Harper Gray"},{"name":"Burton Hicks"},{"name":"Hampton Johnson"}]}]
    
        
//    $scope.results = _.findWhere($scope.datas, {gender: 'female'});
    
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
    
      $scope.results = _.str.capitalize('epeli');

    
    
});