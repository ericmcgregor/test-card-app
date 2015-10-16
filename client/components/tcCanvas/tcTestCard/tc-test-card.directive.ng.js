'use strict';

angular.module('baseappApp')
.directive('tcTestCard', function($meteor, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcTestCard/tc-test-card.view.alt.ng.html',
    replace: true,
    scope:{
      hypothesiId:"@",
      state:"@",
      next:"@",
      prev:"@",
      testCard:"="
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function() {

    },
    link: function(scope, elem, attrs, ctrl) {

    }
  };
})
