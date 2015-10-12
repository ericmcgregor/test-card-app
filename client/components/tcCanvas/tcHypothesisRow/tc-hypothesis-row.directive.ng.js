'use strict';

angular.module('baseappApp')
.directive('tcHypothesisRow', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcHypothesisRow/tc-hypothesis-row.view.ng.html',
    replace: true,
    scope:{
      hypothesi:"="
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope){
      this.testCards = $meteor.collection( () => {
          return TestCard.find({
            'hypothesiId':this.hypothesi._id
          })
      });
    },
    link: function(scope, elem, attrs) {
      // console.log(scope.vm.testCards)
      scope.addTestCard = function(id) {
        $meteor.call('createTestCard', id);
      }
      scope.removeHypothesis = function() {
        $meteor.collection(Hypothesis).remove(scope.vm.hypothesi._id);
      }


    }
  };
});
