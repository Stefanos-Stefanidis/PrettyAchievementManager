
//controller of a static model
app.controller('achievments_Ctrl', function ($scope) {

  $scope.achievments = [
    { name: 'Achievment1', progress: '10', description: 'decs1', points: '10' },
    { name: 'Achievment2', progress: '50', description: 'desc2', points: '30' },
    { name: 'Achievment3', progress: '100', description: 'desc3', points: '100' }
  ];

  
/*  $scope.addAchievement = function() {
      $scope.achievments.push({name:$scope.name1,progress:$scope.name1,description:$scope.name1,points:$scope.name1});
      $scope.name1 = '';
  };*/
});


app.controller("getValue", function ($scope, $element) {
  $scope.min = 0;
  $scope.max = 100;
  $scope.modelValue = 30;
  
  $scope.inputValue = $element.find('input').val();
 
});