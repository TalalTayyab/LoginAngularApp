(function () {

    var app = angular.module("loginApp");

    //mainCtrl
    app.controller('mainCtrl', ['$scope', 'loginAspNet', '$location', 'LA_CONFIG', function ($scope, loginAspNet, $location, LA_CONFIG) {

        $scope.title = LA_CONFIG.MSG.TITLE;

       

        $scope.logOff = function () {
            loginAspNet.logOff();
            $location.path(LA_CONFIG.URL.LOGIN);
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