//1) Note that we have not only added a scope but $http to the function.
//2) Could we have used something besides response.data in the function onUserComplete?
//3) Make a mistake in the Github url to produce an error.
//4) Use the ng-show directive to play with visibility

//Docs on $http: https://docs.angularjs.org/api/ng/service/$http

(function(angular) {

    function MainController($scope, $http) {
        $scope.message = "Hello, Michael";
        $scope.hasError = false;

        var onUserComplete = function(response) {
            $scope.user = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not reach the server";
            $scope.hasError = true;
        };

        $http.get("https://api.github.com/users/mbcrump")
            .then(onUserComplete, onError);
    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);