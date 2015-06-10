angular.module('App', ['ionic','ionic-material','firebase'])
.constant('FURL', 'https://clonerabbit.firebaseio.com/')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('menu', {
          url: "/menu",
          abstract: true,
          templateUrl: "views/nav.html",
          controller: 'NavController'
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            controller: 'AuthController'
          })
        .state('menu.home', {
          url: "/home",
          views: {
            'menuContent' :{
              templateUrl: "views/main.html"
            }
          }
        })
        .state('menu.post', {
          url: "/post",
          views: {
            'menuContent' :{
              templateUrl: "views/post.html",
              controller: 'TaskController'
            }
          }
        })
      .state('menu.browse', {
        url: '/browse',
        views: {
          'menuContent' :{
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
        }
      }
      })
      .state('menu.edit', {
        url: '/edit',
        views: {
          'menuContent' :{
        templateUrl: 'views/edit.html',
        controller: 'TaskController'
        }
      }
      })
      .state('menu.register', {
        url: '/register',
        views: {
          'menuContent' :{
        templateUrl: 'views/register.html',
        controller: 'AuthController'
        }
      }
      })
      ;
  $urlRouterProvider.otherwise("/login");
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
