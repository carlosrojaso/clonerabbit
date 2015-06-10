angular.module('App').controller('TaskController', function($scope, $firebaseArray, FURL, $state, $location, $stateParams,$ionicModal){
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


  $ionicModal.fromTemplateUrl('partial/changuepass.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

});
