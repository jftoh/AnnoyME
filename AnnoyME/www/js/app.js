// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', function($scope, $ionicModal) {
  
  /*
  $scope.alarms = [
    { name: '15:00' },
    { name: '17:00' },
    { name: '22:30' },
  ];
  */
  $scope.alarms = [];
  var storedData = JSON.parse(window.localStorage.getItem("alarms"));
  $scope.alarms = storedData;

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.createAlarm = function(u) {        
    $scope.alarms.push({ name: u.hour + ':' + u.minute });
    $scope.modal.hide();
    window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));

    //var storedData = JSON.parse(window.localStorage.getItem("alarms"));
    //$scope.alarms = storedData;
  };

  $scope.clearAlarm = function() {        
    $scope.alarms = [];
    window.localStorage.setItem("alarms", JSON.stringify($scope.alarms));
  };

});