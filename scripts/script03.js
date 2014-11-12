//We declare a variable named person and populate several fields as well as add it to our $scope



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