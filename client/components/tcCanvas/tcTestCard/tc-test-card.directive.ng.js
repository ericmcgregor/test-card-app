'use strict';

angular.module('baseappApp')
.directive('tcTestCard', function($meteor, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcTestCard/tc-test-card.view.ng.html',
    replace: true,
    scope:{
      hypothesiId:"@",
      state:"@",
      next:"@",
      prev:"@"
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function() {

      this.testCards = $meteor.collection( () => {
          return TestCard.find({
            'state':this.state,
            'hypothesiId':this.hypothesiId
          })
      });
      $meteor.subscribe('testCard');


    },
    link: function(scope, elem, attrs, ctrl) {

      scope.next = function(card){
        card.state = scope.vm.next;
      }

      scope.editTestCard = function(testCardId, state, next, prev) {
        $state.go('projects.detail.testcard', {
          testCardId:testCardId,
          state:state,
          next:next,
          prev:prev
        })
      }
      scope.prev = function(card){
        card.state = scope.vm.prev;
      }

      scope.remove = function(card) {
        scope.vm.testCards.remove(card);
      }
    }
  };
});
