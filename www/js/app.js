

var app = angular.module('achManager', ['ionic', 'ui.router']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
// end of run


app.controller('achievments_Ctrl', function ($scope) {
  $scope.achievments = [
    { name: 'Achievment1', progress: '10' },
    { name: 'Achievment2', progress: '50' },
    { name: 'Achievment3', progress: '100' }
  ];
});



app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('page1', {
      url: '/page1',
      templateUrl: 'templates/page1.html'
    })

    .state('achievment', {
      url: "/AddAchievment",
      templateUrl: "templates/AddAchievment.html"
    });
  $urlRouterProvider.otherwise('templates/AddAchievment.html');
});

app.controller("getValue", function ($scope, $rootScope, $element, $interval) {
  $scope.min = 0;
  $scope.max = 100;
  $scope.modelValue = 30;

  $interval(function () {
    $scope.inputValue = $element.find('input').val();
  }, 250);
});
