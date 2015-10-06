'use strict';

angular.module('baseappApp')
.controller('tcEdityHypothesisCtrl', function($scope, $meteor, $mdSidenav, $state){

  this.hypothesi = $meteor.object(Hypothesis, this.hypothesiId, false);
  $meteor.subscribe('hypothesis');

  this.back = () => {
    console.log($state)
    $state.go('^');
  }

})
.directive('tcEditHypothesisMenu', function($meteor, $mdSidenav, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcEditHypothesis/tc-edit-hypothesis.menu.ng.html',
    replace: true,
    scope:{
      hypothesiId:"@"
    },
    bindToController: true,
    controllerAs:'vm',
    controller:'tcEdityHypothesisCtrl',
    link: function(scope, elem, attrs, ctrl) {
      scope.edit = function(){
        $state.go('projects.detail.hypothesis.edit')
      }
      scope.addTestCard = function(id) {
        $meteor.call('createTestCard', id);
        scope.showFeedback = true;
      }
      scope.save = function(){
        ctrl.hypothesi.save();
      }
      scope.remove = function(){
        $meteor.collection(Hypothesis).remove(ctrl.hypothesi);
        $mdSidenav('right').toggle();
      }
    }
  };
})

.directive('tcEditHypothesisForm', function($meteor, $mdSidenav, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcEditHypothesis/tc-edit-hypothesis.form.ng.html',
    replace: true,
    scope:{
      hypothesiId:"@"
    },
    bindToController: true,
    controllerAs:'vm',
    controller:'tcEdityHypothesisCtrl',
    link: function(scope, elem, attrs, ctrl) {


    }
  };
});
;
