angular.module('app', ['ngStorage']).

controller('TodoCtrl', function(
  $scope, 
  $localStorage
){
  $scope.newItem = "";
  $scope.$storage = $localStorage;
  if ($localStorage.todolist == null)
    $localStorage.todolist = [];
  $scope.addItem = function() {
    if (this.newItem) {
      $localStorage.todolist.push({label: this.newItem, isFinish: false, modify: false});
      $scope.newItem = "";
    }
  }
  $scope.done = function(todo) {
    todo.isFinish = true;
  }
  $scope.removeItem = function() {
    $localStorage.todolist.pop(this);
  }
  $scope.modify = function(todo) {
    todo.modify = true;
  }
  $scope.save = function(todo) {
    todo.modify = false;
  }
  $scope.removeDoneItem = function() {
    console.log($localStorage.todolist);

    for (i in $localStorage.todolist) {
      if ($localStorage.todolist[i].isFinish == true) {
        $localStorage.todolist.splice(i,1);
      }
    }
    console.log($localStorage.todolist); 
  }
});
