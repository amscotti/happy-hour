'use strict';

happyHourApp.directive('votes', function (firebase) {
    return {
        template:'<span id="votes">{{votes}}</span>',
        restrict:'E',
        link:function postLink(scope, element, attrs) {
            scope.votes = 0;
            firebase.getTotalVotes(function (d) {
                scope.votes = d.val();
            });
        }
    };
});
