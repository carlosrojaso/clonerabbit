angular.module('App', ['ionic','ionic-material','firebase'])
.constant('FURL', 'https://clonerabbit.firebaseio.com/')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('browse', {
        url: '/',
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .state('post', {
        url: '/post',
        templateUrl: 'views/post.html',
        controller: 'TaskController'
      })
      .state('edit', {
        url: '/edit',
        templateUrl: 'views/edit.html'
      })
      ;
  $urlRouterProvider.otherwise("/");
  })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
