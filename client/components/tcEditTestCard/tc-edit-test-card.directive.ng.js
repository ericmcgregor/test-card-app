'use strict';

angular.module('baseappApp')
.controller('tcEditTestCardCtrl', function($scope, $meteor, $mdSidenav, $state){

  this.testCard = $meteor.object(TestCard, this.testcardId, false);
  $meteor.subscribe('testCard');

  this.back = () => {
    console.log($state)
    $state.go('^');
  }

  let state = {
    backlog:{
      next:'build',
      prev:'null'
    },
    build:{
      next:'measure',
      prev:'backlog'
    },
    measure:{
      next:'learn',
      prev:'build'
    },
    learn:{
      next:'null',
      prev:'measure'
    },

  }
  $scope.$watch('vm.testCard.state', (value) => {
    this.next = state[value].next;
    this.prev = state[value].prev;
  })

})
.directive('tcEditTestCardMenu', function($meteor, $mdSidenav, $state, $stateParams) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcEditTestCard/tc-edit-test-card.menu.ng.html',
    replace: true,
    scope:{
      testcardId:"@",
      state:"@",
      next:"@",
      prev:"@"
    },
    bindToController:true,
    controllerAs:'vm',
    controller:'tcEditTestCardCtrl',
    link: function(scope, elem, attrs, ctrl) {

      scope.editTestCard = function(id) {
        $state.go('projects.detail.testcard.edit', {testCardId:id})

      }
      scope.next = function(card){
        scope.vm.testCard.state = scope.vm.next;
        scope.vm.testCard.save();
      }

      scope.prev = function(card){
        scope.vm.testCard.state = scope.vm.prev;
        scope.vm.testCard.save();

      }

      scope.remove = function(card) {
        $meteor.collection(TestCard).remove(card);
        $mdSidenav('right').toggle();
      }
    }
  };
})
.directive('tcEditTestCardForm', function($meteor, $mdSidenav, $state, $stateParams) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcEditTestCard/tc-edit-test-card.form.ng.html',
    replace: true,
    scope:{
      testcardId:"@"
    },
    bindToController:true,
    controllerAs:'vm',
    controller:'tcEditTestCardCtrl',
    link: function(scope, elem, attrs, ctrl) {


    }
  };
});
