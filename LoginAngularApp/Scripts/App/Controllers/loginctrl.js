(function () {

    var app = angular.module("loginApp");

    // login controller
    app.controller("loginCtrl", ['$scope', '$location', 'loginAspNet', 'messageHandler', '$rootScope', function ($scope, $location, loginAspNet, messageHandler, $rootScope) {

        $scope.msg = {};
        $scope.busy = false;

        $scope.user = {
            username: 'talal@gmail.com',
            password: 'Windows@8'
        };


        $scope.$on("busyEvent", function (event, busyVal) {
            $scope.busy = busyVal;
        });

        $scope.changeBusyValue = function (newBusyVal) {
            $scope.busy = newBusyVal;
            $rootScope.$broadcast("busyEvent", newBusyVal);
        }

       
    
        $scope.login = function () {

            $scope.msg = messageHandler.getSucc("Please wait", "Logging.....");
            $scope.changeBusyValue(true);



            loginAspNet.login(
                $scope.user.username,
                $scope.user.password,
                function (loggedInUserName, orignalUrl) {
                    $scope.changeBusyValue(false);
                    console.log(loggedInUserName);
                    $location.path(orignalUrl);
                },
                function (data, status, headers, config) {
                    $scope.changeBusyValue(false);
                    $scope.msg = messageHandler.getError(data);

                });


        };

        $scope.register = function (form) {

            $scope.msg = messageHandler.getSucc("Please wait", "Registering user. This may take some time");
            $scope.changeBusyValue(true);

            
            var url = 'api/Account/Register';

            loginAspNet.register(
                url,
                $scope.user.username,
                $scope.user.password,
                $scope.user.password,
                function () {
                    $scope.changeBusyValue(false);
                    $scope.msg = messageHandler.getSucc("User added", "Please login with user id: " + $scope.user.username);

                },
                function (data) {
                    $scope.changeBusyValue(false);
                    $scope.msg = messageHandler.getError(data);

                });


        }


    }]);//controller




}());