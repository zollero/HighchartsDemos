

angular.module("main.homeCtrl", ["ionic"])
    .controller("HomeCtrl", ["$scope", "$location", function($scope, $location) {
        $scope.moduleTitle = "Home";
        console.log($scope.name);
        console.log($location);
    }]);