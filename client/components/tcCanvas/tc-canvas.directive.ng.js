'use strict';

angular.module('baseappApp')
.directive('tcCanvas', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tc-canvas.view.ng.html',
    replace: true,
    scope:{
      projectId:"@"
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope){


        $meteor.autorun($scope, ()=>{
          this.hypothesis = $meteor.collection( () => {
            return Hypothesis.find({projectId:$scope.getReactively('vm.projectId')});
          });
          $meteor.subscribe('hypothesis');
        })



    },
    link: function(scope, elem, attrs) {
      scope.property = 'tcCanvas';

      scope.newHypothesis = function() {
        console.log(scope.vm.projectId)
        $meteor.call('createHypothesis', scope.vm.projectId, 'new hypothesis');
      }

    }
  };
});
