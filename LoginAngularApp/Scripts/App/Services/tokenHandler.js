(function () {

    var app = angular.module("loginApp");

    //wrapper to return store/return items from store.
    app.factory("tokenHandler", ['storageHandler', 'LA_CONFIG', function (storageHandler, LA_CONFIG) {

        var loginTokenId = LA_CONFIG.ID.STORAGE_LOGIN_TOKEN_KEY;
        var nameTokenId = LA_CONFIG.ID.STORAGE_LOGIN_NAME_KEY;
        var redirectUrl = null;

        return {
            setLoginToken: function (token) {
                storageHandler.setItem(loginTokenId, token);
                
            },
            getLoginToken: function () {
                return storageHandler.getItem(loginTokenId);

            },
            removeLoginToken: function () {
                storageHandler.removeItem(loginTokenId);
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
                storageHandler.setItem(nameTokenId, name);
            },
            getLoginName: function () {
                return storageHandler.getItem(nameTokenId);
            }
        }
    }]);

}());