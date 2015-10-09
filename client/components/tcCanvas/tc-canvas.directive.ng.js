'use strict';

angular.module('baseappApp')
.directive('tcCanvas', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tc-canvas.view.ng.html',
    replace: true,
    scope:{
      projectId:"@",
      project:"="
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope){

          this.hypothesis = $meteor.collection( () => {
            return Hypothesis.find({projectId:$scope.getReactively('vm.project._id')});
          });

          $meteor.subscribe('hypothesis');
          $meteor.subscribe('testCard');
          $meteor.subscribe('learnings');

    },
    link: function(scope, elem, attrs) {
      scope.property = 'tcCanvas';
      scope.addTestCard = function(id) {
        $meteor.call('createTestCard', id);
      }
      scope.createHypothesis = function() {
        console.log(scope.vm.projectId)
        $meteor.call('createHypothesis', scope.vm.project._id, 'new hypothesis');
      }
      scope.removeHypothesis = function(id) {
        $meteor.collection(Hypothesis).remove(id);
      }
    }
  };
});
