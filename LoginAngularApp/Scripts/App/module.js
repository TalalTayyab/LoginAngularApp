/// <reference path="angular.js" />


(function () {

    //The main angular module loginApp
    var app = angular.module("loginApp", ['ngRoute', 'ngMessages', 'ngCookies']);

    //constants

    app.constant("LA_CONFIG", {
        URL: {
            LOGIN: 'login',
            ACCOUNT_REGISTER: 'api/Account/Register',
            ACCOUNT_LOGIN: 'token',
        },
        EVENT: {
            BUSY: 'busyEvent'
        },
        MSG: {
            LOGIN_USER_WAIT: 'Logging.....',
            REGISTER_USER_WAIT: 'Registering user. This may take some time',
            REGISTER_USER_DONE: 'Please login with user id: ',
            TITLE: 'Login app'
        },
        TMPL: {
            USER_LOGIN: 'partials/userLogin.html',
            LOGIN: 'partials/login.html',
        },
        ID: {
            STORAGE_LOGIN_TOKEN_KEY: 'login-app-logintoken-2015',
            STORAGE_LOGIN_NAME_KEY: 'login-app-loginname-2015'
        }
    });








    app.run(['$rootScope', '$location', 'tokenHandler', 'LA_CONFIG', function ($rootScope, $location, tokenHandler, LA_CONFIG) {

        //monitoring the route change event
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            var requiresLogin = next.requiresLogin || false;

            

            if (requiresLogin) {

                var loggedIn = tokenHandler.hasLoginToken();

                if (!loggedIn) {

                    tokenHandler.setRedirectUrl($location.path());
                    
                    $location.path(LA_CONFIG.URL.LOGIN);

                } else {

                    tokenHandler.setRedirectUrl(null);//always set to empty
                };

            }//if requiresLogin


        }); // on



    }]); //app.run






}())