console.log('loaded frontend app');

var thing = angular.module('employees',[])
thing.controller('do_data', do_data);



function do_data($scope, $http) {
    console.log('doing data stuff');

}