(function(){

    var github = function($http, $q){

        console.log($q);

        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

        var getAuthenticated = function(){
            return $http.get("https://api.github.com/?access_token=20d78ba0c1ad962ce9b2c3ea12156a0b6baab65e")
        };

        var getRepo = function(url) {
            return $http.get(url);
        };

        var getCollaborators = function(url) {
            return $http.get(url + "/collaborators");
        };

        var getRepoDetails = function(username, reponame){
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            var deferred = $q.defer();

            getAuthenticated()
                .then(function() {
                    getRepo(repoUrl)
                    .then(function() {
                        getCollaborators(repoUrl)
                        .then(function(response) {
                            deferred.resolve(response.data);
                        });
                    });
                });

            return deferred;
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };

    };

    var module = angular.module("githubViewer");
    module.factory("github", github);

}());