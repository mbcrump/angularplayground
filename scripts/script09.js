//Notice $interval has been added to our MainController function.

(function(angular) {


    function MainController($scope, $http, $interval) {


        var onUserComplete = function(response){
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response){
          $scope.repos = response.data;
        };

        var onError = function(reason){
            $scope.error = "Could not reach the server";
        };

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            };

        };

        var startCountdown = function () {
            $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username){
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };

        $scope.message = "Github User Lookup";
        $scope.username = "mbcrump";
        $scope.repoSortOrder = "stargazers_count"
        $scope.countdown = 5;
        startCountdown();


    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", "$interval", MainController]);

})(angular);