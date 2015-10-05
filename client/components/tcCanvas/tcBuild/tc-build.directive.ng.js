'use strict';

angular.module('baseappApp')
.directive('tcBuild', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcBuild/tc-build.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'tcBuild';
    }
  };
});
