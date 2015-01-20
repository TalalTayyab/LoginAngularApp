# LoginAngularApp
A sample login app that uses AngularJS ans Asp.Net Web API 2 OAUTH for login (no MVC).

This is app is built using AngularJS as the front end. On the backend it uses  OAUTH for authenticating.
All communication with the server is done using Asp.Net Web API 2 / No MVC is involved.

Some features of this app are:

1. Defines a form using AngularJS for registering user and login
2. Custom validation using directives & use of ng-message to display validation errors
3. Handle the client side routing to login url first if not authenticated
4. Redirect to the orignal URL if login successful
5. Supports only individual user accounts (at the moment - will extend to support social accounts)


