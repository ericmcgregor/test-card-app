'use strict';

angular.module('baseappApp')
.directive('hypothesisRow', function($meteor, $mdDialog, $mdSidenav, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/hypothesisRow/hypothesis-row.view.ng.html',
    replace: true,
    scope:{
      projectId:"@"
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope){

      this.hypothesis = $meteor.collection( () => {
        return Hypothesis.find({projectId:$scope.getReactively('vm.projectId')});
      });
      $meteor.subscribe('hypothesis');

    },
    link: function(scope, elem, attrs, ctrl) {

      scope.save = function(){
        ctrl.hypothesis.save();
      }

      scope.showLearning = function(ev, item) {

          $mdDialog.show({
            template: '<md-dialog aria-label=""><create-learning-form item-id="'+item._id+'"></create-learning-form></md-dialog>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
          })
          .then(function(answer) {
            scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            scope.status = 'You cancelled the dialog.';
          });
        };

        scope.$state = $state;
      scope.showHypothesis = function(ev, item) {
        // $mdSidenav('right')
        //  .toggle()
        //  .then(function(){
        //    console.log('toggled');
        //  });
        // $mdDialog.show({
        //     template: '<md-dialog aria-label="Mango (Fruit)"><create-hypothesis-form item-id="' + item._id + '"></create-hypothesis-form></md-dialog>',
        //     parent: angular.element(document.body),
        //     targetEvent: ev,
        //     clickOutsideToClose: true
        //   })
        //   .then(function(answer) {
        //     scope.status = 'You said the information was "' + answer + '".';
        //   }, function() {
        //     scope.status = 'You cancelled the dialog.';
        //   });
      };

      scope.showTest = function(ev, item) {

          $mdDialog.show({
              template: '<md-dialog aria-label="Mango (Fruit)"><create-test-form item-id="' + item._id + '"></create-test-form></md-dialog>',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true
            })
            .then(function(answer) {
              scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              scope.status = 'You cancelled the dialog.';
            });
      }

      scope.newHypothesis = function() {
        console.log(scope.vm.projectId)
        $meteor.call('createHypothesis', scope.vm.projectId, 'new hypothesis');
      }

      scope.moveCard = function(item, index, location) {
        item.test_card[index].state = location;
        console.log(item);
        ctrl.hypothesis.save(item);
      }




    }


  };
});
