(function () {

    var app = angular.module("loginApp");

    //mainCtrl
    app.controller('mainCtrl', ['$scope', 'loginAspNet','$location', function ($scope, loginAspNet,$location) {

        $scope.title = "Login app";

       

        $scope.logOff = function () {
            loginAspNet.logOff();
            $location.path('login');
        };

        $scope.loggedIn = function () {
            return loginAspNet.isLoggedIn();
        };

        $scope.browse = function (url) {
            $location.path(url);
        }

        $scope.loggedInUser = function () {
            return loginAspNet.loggedInUser();
        }


    }]);



}());