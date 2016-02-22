
var app = angular.module("highchartDemoApp", ["ionic", "oc.lazyLoad"]);

app.config(["$stateProvider", "$urlRouterProvider", "$ionicConfigProvider",function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.platform.android.tabs.style("standard");
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.android.views.transition("ios");

   $stateProvider.state('main', {
       url: '/main',
       templateUrl: './views/main.html'
   }).state('main.home', {
       url: "/home",
       views: {
           "homeView": {
               templateUrl: "./views/home.html",
               controller: "homeCtrl"
           }
       },
       resolve: ["$ocLazyLoad", function($ocLazyLoad) {
           return $ocLazyLoad.load({
               name: "main.homeCtrl",
               files: ["./js/controller/homeCtrl.js"]
           });
       }]
   }).state('music', {
       url: '/music',
       templateUrl: './music.html'
   });

   $urlRouterProvider.otherwise("/main/home");

}]);

app.controller("MainController", ["$scope", function($scope) {
    console.log($scope);
}]);