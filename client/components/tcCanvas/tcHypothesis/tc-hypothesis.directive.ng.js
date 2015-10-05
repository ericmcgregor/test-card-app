'use strict';

angular.module('baseappApp')
.directive('tcHypothesis', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcHypothesis/tc-hypothesis.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'tcHypothesis';
    }
  };
});
