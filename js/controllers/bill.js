﻿app.controller('billController', function ($scope, $http) {
    $scope.bill = {};
    $scope.billList = [];

    $scope.BillAdd = function () {
        $http
            .get('/Login/CurrentId')
            .then(function (resp) {
                $scope.bill.UserId = resp.data.id;

                $http
                    .post('/Bill/Add', $scope.bill)
                    .then(function (response) {
                        var msg = response.data.Msg;

                        if (msg == 'Added') {
                            alert('Bill added!');
                            $scope.bill = {};
                        }
                    });
            });
    }

    $scope.LoadBillList = function () {
        $http
            .get('/Bill/ListAll')
            .then(function (response) {
                $scope.billList = response.data;
            });
    }
});