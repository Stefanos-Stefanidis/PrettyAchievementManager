
//controller of a static model
app.controller('achievments_Ctrl', function ($scope) {
  $scope.achievments = [
    { name: 'Achievment1', progress: '10', description: '', points: '' },
    { name: 'Achievment2', progress: '50', description: '', points: '' },
    { name: 'Achievment3', progress: '100', description: '', points: '' }
  ];
});




// den exo katalavei akoma ti kanei
app.controller("getValue", function ($scope, $rootScope, $element, $interval) {
  $scope.min = 0;
  $scope.max = 100;
  $scope.modelValue = 30;

  $interval(function () {
    $scope.inputValue = $element.find('input').val();
  }, 250);
});