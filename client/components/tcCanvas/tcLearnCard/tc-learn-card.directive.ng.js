'use strict';

angular.module('baseappApp')
.directive('tcLearnCard', function($meteor, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcLearnCard/tc-learn-card.view.alt.ng.html',
    replace: true,
    scope:{
      testCard:"=",
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope) {
      this.learning = $meteor.object(Learnings, {'testCardId':this.testCard._id});
    },
    link: function(scope, elem, attrs, ctrl) {
      scope.toggleResult = function(result){
        if(ctrl.learning.result === result) {
          ctrl.learning.result = '';
          return;
        }
        ctrl.learning.result = result;

      }

    }
  };
});
