app.controller('loginController', function ($scope, $http) {
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