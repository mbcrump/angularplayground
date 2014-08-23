/**
 * Created by michaelcrump on 8/17/14.
 */

// Code goes here



(function(angular) {

    var person = {
        firstName: "Michael",
        lastName: "Crump",
        imageSrc: "http://michaelcrump.net/get/MichaelCrump180.png"
    };

    function MainController($scope) {
        $scope.message = "Hello, Michael";
        $scope.person = person;

    }

    angular.module("app", []).controller("MainController", ["$scope", MainController]);

})(angular);