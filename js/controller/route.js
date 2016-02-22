
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
               controller: "HomeCtrl"
           }
       },
       resolve: ["$ocLazyLoad", function($ocLazyLoad) {
           return $ocLazyLoad.load({
               name: "main.homeCtrl",
               files: ["./js/controller/homeCtrl.js"]
           });
       }]
   }).state('main.line', {
       url: '/line',
       views: {
           "lineView": {
               templateUrl: './views/line-list.html',
               controller: null
           }
       },
       resolve: ["$ocLazyLoad", function($ocLazyLoad) {
           return $ocLazyLoad.load({
               name: "main.lineCtrl",
               files: ["./js/controller/homeCtrl.js"]
           });
       }]
   }).state('main.column', {
       url: '/column',
       views: {
           "columnView": {
               templateUrl: './views/column-list.html',
               controller: null
           }
       },
       resolve: ["$ocLazyLoad", function($ocLazyLoad) {
           return $ocLazyLoad.load({
               name: "main.lineCtrl",
               files: ["./js/controller/homeCtrl.js"]
           });
       }]
   }).state('main.cake', {
       url: '/cake',
       views: {
           "cakeView": {
               templateUrl: './views/cake-list.html',
               controller: null
           }
       },
       resolve: ["$ocLazyLoad", function($ocLazyLoad) {
           return $ocLazyLoad.load({
               name: "main.lineCtrl",
               files: ["./js/controller/homeCtrl.js"]
           });
       }]
   }).state('main.complex', {
       url: '/complex',
       views: {
           "complexView": {
               templateUrl: './views/complex-list.html',
               controller: null
           }
       },
       resolve: ["$ocLazyLoad", function($ocLazyLoad) {
           return $ocLazyLoad.load({
               name: "main.lineCtrl",
               files: ["./js/controller/homeCtrl.js"]
           });
       }]
   });

   $urlRouterProvider.otherwise("/main/home");

}]);

app.controller("MainController", ["$scope", function($scope) {
    console.log($scope);
}]);