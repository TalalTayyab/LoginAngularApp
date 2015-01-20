(function () {

    var app = angular.module("loginApp");

    // login controller
    app.controller("loginCtrl", ['$scope', '$location', 'loginAspNet', 'messageHandler', '$rootScope', 'LA_CONFIG', function ($scope, $location, loginAspNet, messageHandler, $rootScope, LA_CONFIG) {

        $scope.msg = {};
        $scope.busy = false;

        $scope.user = {
            username: 'talal@gmail.com',
            password: 'Windows@8'
        };


        $scope.$on(LA_CONFIG.EVENT.BUSY, function (event, busyVal) {
            $scope.busy = busyVal;
        });

        $scope.changeBusyValue = function (newBusyVal) {
            $scope.busy = newBusyVal;
            $rootScope.$broadcast(LA_CONFIG.EVENT.BUSY, newBusyVal);
        }



        $scope.login = function () {

            $scope.msg = messageHandler.getSucc(LA_CONFIG.MSG.LOGIN_USER_WAIT);
            $scope.changeBusyValue(true);

            var url = LA_CONFIG.URL.ACCOUNT_LOGIN;

            loginAspNet.login(
                url,
                $scope.user.username,
                $scope.user.password,
                function (loggedInUserName, orignalUrl) {
                    $scope.changeBusyValue(false);
                    $location.path(orignalUrl);
                },
                function (data, status, headers, config) {
                    $scope.changeBusyValue(false);
                    $scope.msg = messageHandler.getError(data);

                });


        };

        $scope.register = function (form) {

            $scope.msg = messageHandler.getSucc(LA_CONFIG.MSG.REGISTER_USER_WAIT);
            $scope.changeBusyValue(true);


            var url = LA_CONFIG.URL.ACCOUNT_REGISTER;

            loginAspNet.register(
                url,
                $scope.user.username,
                $scope.user.password,
                $scope.user.password,
                function () {
                    $scope.changeBusyValue(false);
                    $scope.msg = messageHandler.getSucc(LA_CONFIG.MSG.REGISTER_USER_DONE + $scope.user.username);

                },
                function (data) {
                    $scope.changeBusyValue(false);
                    $scope.msg = messageHandler.getError(data);

                });


        }


    }]);//controller




}());