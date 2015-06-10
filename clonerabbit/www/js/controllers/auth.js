angular.module('App').controller('AuthController', function($scope, $location, $ionicPopup,$location,$state, Auth) {

  if(Auth.user.provider) {
    $location.path('/');
  }

	$scope.register = function(user) {
    Auth.register(user)
      .then(function() {
        var alertPopup = $ionicPopup.alert({
           title: 'Alert!',
           template: 'Registered successfully'
         });
         alertPopup.then(function(res) {
           console.log('Registered successfully');
         });
        $location.path('/');
      }, function(err) {
        var alertPopup = $ionicPopup.alert({
           title: 'Something gone wrong.',
           template: '' + err
         });
         alertPopup.then(function(res) {
           console.log('Something gone wrong.' + err);
         });
        // errMessage(err);
      });
	};

	$scope.login = function(user) {

    Auth.login(user)
      .then(function() {
        //toaster.pop('success', "Logged in successfully");
        //$state.go('/home');
  			console.log("logged in");
        $location.path('/menu/home');
      }, function(err) {
        //toaster.pop('error', "Oops! Something went wrong.");
        // errMessage(err);
        console.log("Bad info");
      });
	};

	$scope.changePassword = function(user) {

    Auth.changePassword(user)
      .then(function() {

        // Reset form
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        //toaster.pop('success', "Password changed successfully");
      }, function(err) {
        //toaster.pop('error', "Oops! Something went wrong.");
        // errMessage(err);
      });
  };

	// function errMessage(err) {

 //    var msg = "Unknown Error...";

 //    if(err && err.code) {
 //      switch (err.code) {
 //        case "EMAIL_TAKEN":
 //          msg = "This email has been taken"; break;
 //        case "INVALID_EMAIL":
 //          msg = "Invalid email"; break;
 //        case "NETWORK_ERROR":
 //          msg = "Network error"; break;
 //        case "INVALID_PASSWORD":
 //          msg = "Invalid password"; break;
 //        case "INVALID_USER":
 //          msg = "Invalid user"; break;
 //      }
 //    }

 //    toaster.pop('error', msg);
 //  };


});
