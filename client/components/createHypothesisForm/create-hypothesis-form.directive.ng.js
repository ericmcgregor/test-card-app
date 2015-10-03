'use strict';

angular.module('baseappApp')
.directive('createHypothesisForm', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/createHypothesisForm/create-hypothesis-form.view.ng.html',
    replace: true,
    scope:{
      itemId:"@"
    },
    bindToController: true,
    controllerAs:'vm',
    controller:function($scope){

      this.hypothesis = $meteor.object(Hypothesis, this.itemId, false);
      $meteor.subscribe('hypothesis');

    },
    link: function(scope, elem, attrs, ctrl) {
      
      scope.save = function(){
        ctrl.hypothesis.save();
      }
      scope.remove = function(){
        $meteor.collection(Hypothesis).remove(ctrl.hypothesis);

      }
    }
  };
});
