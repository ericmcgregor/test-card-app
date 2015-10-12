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
      console.log(this)

    },
    link: function(scope, elem, attrs) {


      scope.removeTestCard = function(){
        $meteor.collection(TestCard).remove(scope.vm.testCard._id);
      }



      scope.getAvatar = function(){
        let avatar = $meteor.call('getAvatar').then(function(r){
          scope.contacts = [{
            name:'eric mcgregor',
            image:r
          }]
          return r;
        });

        return avatar;

      }
      scope.thisContact = [];
      scope.assigned_to = angular.copy(scope.vm.testCard.assigned_to);
      scope.$watchCollection('assigned_to', function(value){
        scope.vm.testCard.assigned_to = value;
        // TestCard.update({
        //   _id:{$eq:scope.vm.testCard._id}
        // }, {
        //   $set:{
        //     assigned_to:value
        //   }
        // });
      })
      scope.contacts = [{
        name:'eric mcgregor',
        image:scope.getAvatar()
      }]
      // function loadContacts() {
      // var contacts = [
      //   'Marina Augustine',
      //   'Oddr Sarno',
      //   'Nick Giannopoulos',
      //   'Narayana Garner',
      //   'Anita Gros',
      //   'Megan Smith',
      //   'Tsvetko Metzger',
      //   'Hector Simek',
      //   'Some-guy withalongalastaname'
      // ];
      // return contacts.map(function (c, index) {
      //   var cParts = c.split(' ');
      //   var contact = {
      //     name: c,
      //     email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
      //     image: 'http://lorempixel.com/50/50/people?' + index
      //   };
      //   contact._lowername = contact.name.toLowerCase();
      //   return contact;
      // });

      // scope.editHypothesis = function(){
      //   $state.go('projects.detail.hypothesis', {hypothesiId:scope.vm.hypothesi._id})
      // }

    }
  };
});
