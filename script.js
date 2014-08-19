/**
 * Created by michaelcrump on 8/17/14.
 */

// Code goes here

(function(angular) {

    function MainController($scope) {
        $scope.message = "Hello, Michael";
    }

    angular.module("app", []).controller("MainController", ["$scope", MainController]);

})(angular);