'use strict';

angular.module('baseappApp')
.directive('createLearningForm', function($meteor) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/createLearningForm/create-learning-form.view.ng.html',
    replace: true,
    scope:{
      itemId:"@"
    },
    bindToController: true,
    controllerAs:'vm',
    controller:function(){
      this.hypothesis = $meteor.object(Hypothesis, this.itemId, false);
      $meteor.subscribe('hypothesis');

      let disable = [
      'name',
      'assigned_to',
      'deadline',
      'duration',
      'hypothesis',
      'version',
      'visible'
      ]
      this.shouldDisable = (key) => {
        return disable.find( (element) => {
          return element == key
        } ) ? true : false;
      }

    },
    link: function(scope, elem, attrs, ctrl) {

      scope.save = function(){
        ctrl.hypothesis.save();
      }

    }
  };
});
