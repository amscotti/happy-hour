'use strict';

happyHourApp.directive('count', function(firebase) {
  return {
    template: '<span class="badge badge-success">{{count}}</span>',
    restrict: 'E',
    scope: {
        beerId: '@'
    },
    link: function postLink(scope, element, attrs) {
        scope.count = 0;
        attrs.$observe('beerId', function(beerId){
            firebase.getVote(beerId, function(d){
                scope.count = d.val();
            });
        });
    }
  };
});
