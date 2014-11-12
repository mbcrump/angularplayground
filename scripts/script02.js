//Change the $scope.message to say something else.

//Docs on modules: https://docs.angularjs.org/guide/module
//Docs on scope: https://docs.angularjs.org/guide/scope
//Docs on controllers: https://docs.angularjs.org/guide/controller
//Docs on dependency injection: https://docs.angularjs.org/guide/di

(function(angular) {

    function MainController($scope) {
        $scope.message = "Hello, Michael";
    }

    angular.module("app", []).controller("MainController", ["$scope", MainController]);

})(angular);