angular.module('App').controller('TaskController', function($scope, $firebaseArray, FURL, $state, $location, $stateParams){
  var ref = new Firebase(FURL);
	var fbTasks = $firebaseArray(ref.child('tasks'));
	var taskId = $stateParams.taskId;

	$scope.tasks = fbTasks;

	if(taskId) {
		$scope.selectedTask = getTask(taskId);
	}

	function getTask(taskId) {
		return $firebase(ref.child('tasks').child(taskId)).$asObject();
	};

	$scope.postTask = function(task) {
		$scope.tasks.$add(task);
		$state.go('browse');
	};

	$scope.updateTask = function(task) {
		$scope.selectedTask.$save(task);
		$state.go('browse');
	};

});
