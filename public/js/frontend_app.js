console.log('loaded frontend app');

angular.module('employees',[]).controller('do_data', do_data);



function do_data($scope, $http) {
    console.log('doing data stuff');

    $scope.read = function () {
        console.log('getting all data');
    }

    $scope.create = function () {
        console.log('getting all data');
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