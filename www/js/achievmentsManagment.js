
//controller of a static model
app.controller('achievments_Ctrl', function ($scope,$element,$state) {
  $scope.min = 0;
  $scope.max = 100;
  $scope.modelValue = 30;
  $scope.todoValue = '';
  $scope.todoText = '';
  $scope.achievments = [
    { name: 'Achievment1', progress: '10', description: 'decs1', points: '10' },
    { name: 'Achievment2', progress: '50', description: 'desc2', points: '30' },
    { name: 'Achievment3', progress: '100', description: 'desc3', points: '100' }
  ];

  $scope.setColor = function (progress) {
    if (progress == '100') {
      return {
        'background': 'green',
        'width': (progress + '%')
      }
    }
    else {
      return {
        'background': 'red',
        'width': (progress + '%'),
      }
    }
  }



  $scope.saved = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
  localStorage.setItem('todos', JSON.stringify($scope.todos));
  
 
  $scope.addTodo = function() {
    if ($scope.todoText != "") {
      $scope.inputValue = $element.find('input').val();

        $scope.todos.push({
          text: $scope.todoText,
          complete: '0',
          points: $scope.inputValue,
          date:  Date(),
          done: false
        });
        $scope.todoText = ''; //clear the input after adding
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        //$window.location.reload(true);
        $state.go($state.current, {}, {reload: true})
    }
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count+= todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if (!todo.done){
        $scope.todos.push(todo);
      }else{
        
      }
      $state.go($state.current, {}, {reload: true})
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  var limitStep = 1;
  var limitOffset = -4;
  $scope.limit = limitStep;
  $scope.limitOffsetVar = limitOffset;
  $scope.incrementLimit = function() {
   
      $scope.limit += limitStep;
      $scope.limitOffsetVar += limitOffset;
   
  };
  $scope.decrementLimit = function() {
      $scope.limit -= limitStep;
      $scope.limitOffsetVar -= limitOffset;

  };
});

app.controller("getValue", function ($scope, $element) {
  $scope.min = 0;
  $scope.max = 100;
  $scope.modelValue = 30;
  
/*  $scope.inputValue = $element.find('input').val();*/
  
});






function TodoController ($scope) {
  
}