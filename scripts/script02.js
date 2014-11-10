//Change the $scope.message to say something else.

(function(angular) {

    function MainController($scope) {
        $scope.message = "Hello, Michael";
    }

    angular.module("app", []).controller("MainController", ["$scope", MainController]);

})(angular);