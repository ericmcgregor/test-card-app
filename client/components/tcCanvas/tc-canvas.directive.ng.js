'use strict';

angular.module('baseappApp')
.directive('tcCanvas', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tc-canvas.view.ng.html',
    replace: true,
    scope:{
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
      scope.expanded = false;
      scope.scale = false;
      
      scope.createHypothesis = function() {
        console.log(scope.vm.projectId)
        $meteor.call('createHypothesis', scope.vm.project._id, 'new hypothesis');
      }

      scope.toggleScale = function(){
        scope.scale = !scope.scale;
      }
      scope.expandAll = function(expand) {
        scope.expanded = expand;
        $meteor.call('expandAll', scope.vm.project._id, expand);
      }

    }
  };
});
