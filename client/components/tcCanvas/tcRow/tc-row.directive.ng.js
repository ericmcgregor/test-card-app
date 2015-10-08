'use strict';

angular.module('baseappApp')
.directive('tcRow', function($meteor, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcRow/tc-row.view.ng.html',
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

      scope.editHypothesis = function(){
        $state.go('projects.detail.hypothesis', {hypothesiId:scope.vm.hypothesi._id})
      }

    }
  };
});
