app.controller('billController', function ($scope, $http) {
    $scope.bill = {};
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
});