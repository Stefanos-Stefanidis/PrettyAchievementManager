
angular.module('starter', ['ionic','ui.router'])


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html'
  })

  .state('achievment', {
    url: "/AddAchievment",
    templateUrl: "templates/AddAchievment.html"
  });
  $urlRouterProvider.otherwise('/');
})
.controller("getValue", function($scope, $rootScope, $element, $interval) {
    $scope.min = 0;
    $scope.max = 100;
    $scope.modelValue = 30;
    
    $interval(function() {
        $scope.inputValue = $element.find('input').val();
    }, 250);
});







