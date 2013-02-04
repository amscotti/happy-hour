'use strict';

happyHourApp.factory('beerService', function ($rootScope, $http, firebase) {
    var beers = {"beers":[
        {"id":"6", "name":"Guiness Stout"},
        {"id":"4", "name":"Lagunitas IPA"},
        {"id":"5", "name":"Newcastle Brown Ale"},
        {"id":"2", "name":"Sierra Nevada Pale Ale"},
        {"id":"3", "name":"Stella Artois"},
        {"id":"1", "name":"Widmer Hefeweisen"}
    ]};

    var votedBeer = {};

    // Public API here
    return {
        vote:function (beer) {
            votedBeer = beer;
            $http.post("/vote", beer);
            firebase.addVote(beer);
        },
        get:function(){
            return beers;
        }
    };
});
