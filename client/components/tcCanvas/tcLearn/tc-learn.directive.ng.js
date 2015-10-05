'use strict';

angular.module('baseappApp')
.directive('tcLearn', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcLearn/tc-learn.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'tcLearn';
    }
  };
});
