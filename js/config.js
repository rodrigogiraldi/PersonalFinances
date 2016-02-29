app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/Bill/Add', {
            templateUrl: 'Bill/Add',
            controller: 'billController'
        })
        .when('/Bill/Edit', {
            templateUrl: 'Bill/Edit',
            controller: 'billController'
        });
}]);


//app.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            template: '<h1>/</h1><p><a href="#Signup">Siginup</a></p>',
//            controller: 'loginController'
//        })
//        .when()
//        .otherwise({
//            template: '<h2>other</h2>',
//            controller: 'loginController'
//        });
//        .when('/', {
//            templateUrl: 'Login/Signin',
//            controller: 'loginController'
//        })
//        .when('/Login', {
//            templateUrl: 'Login/Signin',
//            controller: 'loginController'
//        })
//        .when('/Login/Signup', {
//            templateUrl: 'Login/Signup',
//            controller: 'loginController'
//        })
//        .when('/Signup', {
//            templateUrl: 'Login/Signup',
//            controller: 'loginController'
//        })
//        .otherwise({
//            redirectTo: '/Login'
//        });
//}]);