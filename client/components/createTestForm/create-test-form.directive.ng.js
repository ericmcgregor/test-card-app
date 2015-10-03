'use strict';

angular.module('baseappApp')
.directive('createTestForm', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/createTestForm/create-test-form.view.ng.html',
    replace: true,
    scope:{
      itemId:"@"
    },
    bindToController: true,
    controllerAs:'vm',
    controller:function($scope){

      this.hypothesis = $meteor.object(Hypothesis, this.itemId, false);
      $meteor.subscribe('hypothesis');

      let disable = [
      'version'
      ]

      this.shouldDisable = (key) => {
        return disable.find( (element) => {
          return element == key
        } ) ? true : false;
      }

    },
    link: function(scope, elem, attrs, ctrl) {
      scope.save = function(){
        if(ctrl.hypothesis.test[ctrl.hypothesis.test_version].state == 'measure') {
          ctrl.hypothesis.learn[ctrl.hypothesis.test_version].visible = true;
        } else {
          ctrl.hypothesis.learn[ctrl.hypothesis.test_version].visible = false;
        }
        ctrl.hypothesis.save();
      }

    }
  };
});
