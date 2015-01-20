(function () {

    var app = angular.module("loginApp");

    //login service to handle asp.net identity login functionality.

    app.factory('loginAspNet', ['tokenHandler', '$http', function (tokenHandler, $http) {
        
        var redirectUrl = "";
       

        return {

            login: function (url,username, password, onSuccess, onError) {

                $http({
                    url: url,
                    method: 'POST',
                    data: "userName=" + username + "&password=" + password + "&grant_type=password"
                }).success(function (data) {

                    var orignalUrl = tokenHandler.getRedirectUrl();
                    tokenHandler.setLoginToken(data.access_token);
                    tokenHandler.setLoginName(data.userName);
                    

                    onSuccess(data.userName, orignalUrl);

                }).error(function (data, status, headers, config) {
                    onError(data, status, headers, config);
                });

              
            },

            register: function(url,email,password,confirmPwd,onSucc,onError){

                //'api/Account/Register'

                $http({
                    url: url,
                    method: 'POST',
                    data: {
                        Email: email,
                        Password: password,
                        ConfirmPassword: confirmPwd
                    }
                }).success(function (data) {
                    onSucc();

                }).error(function (data, status, headers, config) {
                    onError(data, status, headers, config);
                });

            },


            logOff: function () {
                tokenHandler.removeLoginToken();
            },

            isLoggedIn: function () {
                return tokenHandler.hasLoginToken();
            },

            loggedInUser: function () {
                return tokenHandler.getLoginName();
            }

        };


    }]);


}());