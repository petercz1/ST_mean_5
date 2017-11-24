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
        var data = {
            name: $scope.input_name,
            email: $scope.input_email,
            gender: $scope.input_gender,
            job: $scope.input_job,
            favorite_colors: $scope.input_favorite_colors,
            avatar: $scope.input_avatar
        }
        $http.post('/api/v5/create' + data);
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