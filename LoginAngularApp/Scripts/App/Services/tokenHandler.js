(function () {

    var app = angular.module("loginApp");

    //Service for storage of items.
    app.factory("tokenHandler", function () {

        var loginTokenId = "login_token_key";
        var nameTokenId = "login_name_token_key";
        var redirectUrl = null;

        return {
            setLoginToken: function (token) {
                sessionStorage.setItem(loginTokenId, token);
            },
            getLoginToken: function () {
                return sessionStorage.getItem(loginTokenId);
            },
            removeLoginToken: function () {
                sessionStorage.removeItem(loginTokenId);
            },
            hasLoginToken: function () {
                return this.getLoginToken() != null;
            },
            setRedirectUrl: function (url) {
                redirectUrl = url;
            },
            getRedirectUrl: function () {
                return redirectUrl;
            },
            setLoginName: function (name) {
                sessionStorage.setItem(nameTokenId, name);
            },
            getLoginName: function () {
                return sessionStorage.getItem(nameTokenId);
            }
        }
    });

}());