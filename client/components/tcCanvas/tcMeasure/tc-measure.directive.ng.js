'use strict';

angular.module('baseappApp')
.directive('tcMeasure', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcMeasure/tc-measure.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'tcMeasure';
    }
  };
});
