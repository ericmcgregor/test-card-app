'use strict';

angular.module('baseappApp')
.directive('tcTestCard', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcTestCard/tc-test-card.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'tcTestCard';
    }
  };
});