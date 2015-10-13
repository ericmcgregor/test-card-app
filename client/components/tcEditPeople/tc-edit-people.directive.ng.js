'use strict';

angular.module('baseappApp')
.directive('tcEditPeople', function($stateParams, $meteor, $state, $mdSidenav) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcEditPeople/tc-edit-people.view.ng.html',
    replace: true,
    scope:{},
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope){

          this.people = $meteor.collection(People);
          this.testCard = $meteor.object(TestCard, {_id:$stateParams.testCard._id});
          $meteor.subscribe('people');

    },
    link: function(scope, elem, attrs) {
      console.log($stateParams)

        scope.selectPerson = function(person) {

          scope.vm.testCard.assigned_to = {
            name:person.name,
            image:person.image
          };

          $mdSidenav('right').close();

        }
    }
  };
});
