(function(angular) {


    function MainController($scope, $http) {
        $scope.message = "Hello, Michael";

        var onUserComplete = function(response){
            $scope.user = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not reach the server";
        };

        $http.get("https://api.github.com/users/mbcrump")
            .then(onUserComplete, onError);
        //Make a mistake in the github url to produce error

    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);