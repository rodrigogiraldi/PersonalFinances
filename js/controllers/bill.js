app.controller('billController', function ($scope, $http) {
    $scope.bill = {};
    $scope.billList = [];
    $scope.criterioOrder = 'Name';

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

                for (var i = 0; i < $scope.billList.length; i++) {
                    $scope.billList[i].Operation = $scope.billList[i].Operation == 0 ? "In" : "Out";
                    $scope.billList[i].Method = $scope.billList[i].Method == 0 ? "Money" : "Card";
                    $scope.billList[i].State = $scope.billList[i].State == 0 ? "Paid" : "Not Paid";

                    var stringData = $scope.billList[i].Date;
                    var data = stringData != undefined ? new Date(Number(stringData.substring(6, 19))) : undefined;
                    $scope.billList[i].Date = data;
                }
            });
    }

    $scope.LoadBillListByName = function (billName) {
        $http
            .post('Bill/ListByName', { Name: billName })
            .then(function (response) {
                $scope.billList = response.data;

                for (var i = 0; i < $scope.billList.length; i++) {
                    $scope.billList[i].Operation = $scope.billList[i].Operation == 0 ? "In" : "Out";
                    $scope.billList[i].Method = $scope.billList[i].Method == 0 ? "Money" : "Card";
                    $scope.billList[i].State = $scope.billList[i].State == 0 ? "Paid" : "Not Paid";

                    var stringData = $scope.billList[i].Date;
                    var data = stringData != undefined ? new Date(Number(stringData.substring(6, 19))) : undefined;
                    $scope.billList[i].Date = data;
                }
            });
    }
});