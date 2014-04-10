var myApp = angular.module('mddSampleApp', [
    'ngRoute'
  ])
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      }).when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'MainCtrl'
      }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
