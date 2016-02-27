app.controller('sideBarController', function ($scope) {
    $scope.menu = [
        bills = false,
        charts = false,
        reports = false
    ]

    $scope.menuClick = function (menuId) {
        //document.getElementById(menuId).removeAttribute("class");
        if(!$scope.menu[menuId]){
            document.getElementById(menuId).setAttribute("class", "glyphicon glyphicon-menu-down");
        }
        else {
            document.getElementById(menuId).setAttribute("class", "glyphicon glyphicon-menu-right");
        }
        $scope.menu[menuId] = !$scope.menu[menuId];
    }
});