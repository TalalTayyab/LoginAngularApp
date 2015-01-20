/// <reference path="angular.js" />


(function () {

    //The main angular module loginApp
    var app = angular.module("loginApp", ['ngRoute','ngMessages']);

    app.run(['$rootScope', '$location', 'tokenHandler', function ($rootScope, $location, tokenHandler) {

        //monitoring the route change event
        $rootScope.$on("$routeChangeStart", function (event, next,current) {

            var requiresLogin = next.requiresLogin || false;
            
                      
            if (requiresLogin) {

                var loggedIn = tokenHandler.hasLoginToken();

                if (!loggedIn) {

                    console.log('inside redirection to login');

                    //redirect = true;
                    //redirectUrl = routeData.originalPath;
                    tokenHandler.setRedirectUrl($location.path());

                    $location.path("login");

                } else {

                    tokenHandler.setRedirectUrl(null);//always set to empty
                };

            }//if requiresLogin
           

        }); // on



    }]); //app.run





    
}())