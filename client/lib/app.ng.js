angular.module('baseappApp', [
  'angular-meteor',
  'ui.router',
  'angularUtils.directives.dirPagination',
  'ngMaterial',
  'ngMdIcons'
]);

var themeIcons = ['$mdIconProvider' , function ($mdIconProvider) {

  $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("av", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av.svg")
    .iconSet("editor", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");

}];

angular.module('baseappApp')
 .config(themeIcons)
 .config(function($mdThemingProvider){
   $mdThemingProvider.theme('default')
  .primaryPalette('grey', {
    'default': '800', // by default use shade 400 from the pink palette for primary intentions
    'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '200', // use shade 600 for the <code>md-hue-2</code> class
    'hue-3': '500' // use shade A100 for the <code>md-hue-3</code> class
  })
  // If you specify less than all of the keys, it will inherit from the
  // default shades
  .accentPalette('blue-grey', {
    'default': '200' // use shade 200 for default, and keep all other shades the same
  });
 });


onReady = function() {
  angular.bootstrap(document, ['baseappApp']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

// if (Meteor.isClient) {
//   // log sent messages
//   var _send = Meteor.connection._send;
//   Meteor.connection._send = function (obj) {
//     console.log("send", obj);
//     _send.call(this, obj);
//   };
//
//   // log received messages
//   Meteor.connection._stream.on('message', function (message) {
//     console.log("receive", JSON.parse(message));
//   });
// }
