app.controller('loginController', function ($scope, $http, $location) {
    $scope.isRegister = false;
    $scope.emailOrPasswordWrong = false;

    $scope.checkLogin = function () {
        $scope.botaoSiginDisable = true;
        $scope.showProgress = true;
        var validacaoOk = $scope.formLogin.$valid;

        if (validacaoOk) {
            $scope.camposInvalidos = false;
            $http
                .post('/Login/Read', $scope.user)
                .then(function (response) {
                    if (response.data.Msg != undefined) {
                        $scope.emailOrPasswordWrong = true;
                        $scope.botaoSiginDisable = false;
                        $scope.showProgress = false;
                    }
                    else {
                        $scope.emailOrPasswordWrong = false;
                        window.location.replace("/");
                    }
                });
        }
        else {
            $scope.camposInvalidos = true;

        }
        $scope.botaoSiginDisable = false;
    };

    $scope.prepararFormCreate = function () {
        $scope.isRegister = !$scope.isRegister;
        $scope.emailOrPasswordWrong = false;
        $scope.user.email = '';
        $scope.user.password = '';
    }

    $scope.createUser = function(){
        $http
            .post('/Login/Create', $scope.user)
            .then(function(response) {
                var result = response;
            });
    }

    $scope.getUsuario = function(){
        $http
            .get('/Login/Current')
            .then(function(response) {
                $scope.email = response.data.email;
            });
    }

    $scope.logout = function(){
        $http
            .get('/Login/Logout')
            .then(function (response) {
                if (response.data.Msg == 'logout done') {
                    window.location.replace("/Login");
                }
            });
    }

});