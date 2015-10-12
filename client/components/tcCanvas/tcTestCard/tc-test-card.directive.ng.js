'use strict';

angular.module('baseappApp')
.directive('tcTestCard', function($meteor, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/tcCanvas/tcTestCard/tc-test-card.view.ng.html',
    replace: true,
    scope:{
      hypothesiId:"@",
      state:"@",
      next:"@",
      prev:"@",
      testCard:"="
    },
    bindToController:true,
    controllerAs:'vm',
    controller:function() {

    },
    link: function(scope, elem, attrs, ctrl) {

      // scope.next = function(card){
      //   card.state = scope.vm.next;
      // }

      // scope.editTestCard = function(testCardId, state, next, prev) {
      //   $state.go('projects.detail.testcard', {
      //     testCardId:testCardId,
      //     state:state,
      //     next:next,
      //     prev:prev
      //   })
      // }
      // scope.prev = function(card){
      //   card.state = scope.vm.prev;
      // }
      //
      // scope.remove = function(card) {
      //   $meteor.collection(TestCard).remove(card);
      // }


    }
  };
})
.directive("contenteditable", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };
      element.bind("focus", function(){
        element.addClass('editing md-whiteframe-z3');
      });
      element.bind("keyup change", function() {
        scope.$apply(read);
      });
      element.bind("blur", function() {
        element.removeClass('editing md-whiteframe-z3');
        scope.$apply(read);
      });
    }
  };
});
