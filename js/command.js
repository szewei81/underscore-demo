app.controller('allController', function ($scope) {

    $scope.datas = datas;

    // find or filter collection
    $scope.results = _.findWhere($scope.datas, {gender: 'female'});

    $scope.results = _.where($scope.datas, {gender: 'female'});

    $scope.results = _.find($scope.datas, function(data){
        return data.age > 50
    })

    $scope.results = _.filter($scope.datas, function(data){
        return data.age < 30 && data.gender == 'female'
    });

    $scope.results = _.reject($scope.datas, function(data){
        return data.age > 50
    });

    $scope.results = _.max($scope.datas, function(data){
        return data.age;
    });


    //checking some status for collection
    $scope.results = _.every($scope.datas, function(data){
        return data.friends
    });

    $scope.results = _.some($scope.datas, function(data){
        return data.phone.match('(850)')
    });

    //modify the list
    $scope.results = _.reduce($scope.datas, function(memo, data){
        return memo + data.age
    }, 0);

    $scope.results = _.pluck($scope.datas, 'name');

    $scope.results = _.map($scope.datas, function(data){
        return (data.gender == 'male' ? 'Mr. ' : 'Ms. ') + data.name;
    });

    $scope.results = _.chain($scope.datas)
        .pluck('friends')
        .flatten(true)
        .pluck('name')
        .value();


    //converting string
    $scope.results = _.str.capitalize('epeli');

    $scope.results = _.str.capitalize('epeli');

    $scope.results = _.str.capitalize('epeli');



});