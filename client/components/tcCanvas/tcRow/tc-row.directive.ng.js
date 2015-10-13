'use strict';

angular.module('baseappApp')
.directive('tcRow', function($meteor, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcRow/tc-row.view.alt.ng.html',
    replace: true,
    scope:{
      hypothesi:"=",
      testCard:"="
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function($scope){
      this.learning = $meteor.object(Learnings, {testCardId:this.testCard._id});
      this.contacts = $meteor.collection(People);
    },
    link: function(scope, elem, attrs) {


      scope.removeTestCard = function(){
        $meteor.collection(TestCard).remove(scope.vm.testCard._id);
      }

      scope.editPeople = function(){
        $state.go('projects.detail.editPeople', {testCard:scope.vm.testCard});
      }


    }
  };
});
