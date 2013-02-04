'use strict';

happyHourApp.controller('MainCtrl', function ($scope, beerService) {

    $scope.beers = beerService.get().beers;

    $scope.vote = function(beer) {
        beerService.vote(beer);
    };

    $scope.isOdd = function(beer){
        return (beer.id % 2 !== 0);
    };

    $scope.isEven = function(beer){
        return (beer.id % 2 === 0);
    };

});
