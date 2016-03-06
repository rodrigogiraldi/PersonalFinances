app.controller('loginController', function ($scope, $http, $location, $rootScope) {
    $scope.isRegister = false;
    $scope.emailOrPasswordWrong = false;
    $scope.emailAlreadyUsed = false;

    $scope.user = {
        email: '',
        password: ''
    };

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

    $scope.createUser = function () {
        $scope.showProgressCreate = true;
        var validacaoOk = $scope.formRegister.$valid;

        if (validacaoOk && $scope.user.password == $scope.passwordRepeat) {
            $http
                .post('/Login/CheckEmail', $scope.user)
                .then(function (responseCheck) {
                    if (responseCheck.data.Msg == 'Email OK') {
                        $http
                            .post('/Login/Create', $scope.user)
                            .then(function (response) {
                                var result = response;
                            });
                        window.location.replace("/");
                    }
                    else {
                        $scope.showProgressCreate = false;
                        $scope.emailAlreadyUsed = true;
                    }
                });
        }
        else {
            $scope.camposInvalidos = true;
        }

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