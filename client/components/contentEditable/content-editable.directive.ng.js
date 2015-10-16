'use strict';

angular.module('baseappApp')
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
