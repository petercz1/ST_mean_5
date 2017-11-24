console.log('loaded frontend app');

angular.module('employees',[]).controller('do_data', do_data);



function do_data($scope, $http) {
    console.log('doing data stuff');

    $scope.read = function () {
        console.log('getting all data');
        $http.get('/api/v5/read').then();
    }

    $scope.read();

    $scope.create = function () {
        console.log('getting all data');
        var 
    }

    $scope.update = function (employee) {
        console.log('getting all data');
        console.log(employee);
    }

    $scope.delete = function (employee) {
        console.log('getting all data');
        console.log(employee);
        
    }

}