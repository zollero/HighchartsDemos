

angular.module("main.homeCtrl", ["ionic"])
    .controller("homeCtrl", ["$scope", "$location", function($scope, $location) {
        $scope.name = "Home";
        console.log($scope.name);
        console.log($location);
    }]);