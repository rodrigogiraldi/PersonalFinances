app.controller('loginController', function ($scope, $http, $location) {
    $scope.isRegister = false;
    $scope.emailOrPasswordWrong = false;

    $scope.checkLogin = function () {
        $http
            .post('/Login/Read', $scope.user)
            .then(function(response) {
                if (response.data.Msg != undefined) {
                    $scope.emailOrPasswordWrong = true;
                }
                else {
                    $scope.emailOrPasswordWrong = false;
                    window.location.replace("/");
                    //$location.path('/Home');
                    //$location.url('/Home');
                    //$location.url('/Home');
                }
            });
    };

    $scope.createUser = function () {
        $http
            .post('/Login/Create', $scope.user)
            .then(function (response) {
                var result = response;
            });
    }

});