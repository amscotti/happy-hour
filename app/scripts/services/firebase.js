'use strict';

happyHourApp.factory('firebase', function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    var databaseRef = new Firebase('https://happy-hour.firebaseio.com');

    return {
        addVote: function(beer){
            //add vote for the beer
            var beerRef = databaseRef.child(beer.id);
            beerRef.transaction(function(current_value) {
                return current_value + 1;
            });

            //add vote over all
            var voteRef = databaseRef.child("votes");
            voteRef.transaction(function(current_value) {
                return current_value + 1;
            });
        },
        getVote: function(id, callback){
            if(id !== undefined){
                var beerRef = databaseRef.child(id);
                beerRef.on("value", function () {
                    var args = arguments;
                    $rootScope.safeApply(function () {
                        callback.apply(beerRef, args);
                    });
                });
            }
        },
        getTotalVotes: function(callback){
            var votesRef = databaseRef.child("votes");
            votesRef.on("value", function () {
                var args = arguments;
                $rootScope.safeApply(function () {
                    callback.apply(votesRef, args);
                });
            });

        }
    }
});
