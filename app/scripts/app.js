'use strict';

var happyHourApp = angular.module('happyHourApp', [])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'views/main.html',
            controller:'MainCtrl'
        })
        .when('/voted', {
            templateUrl:'views/thankyou.html',
            controller:'MainCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);
