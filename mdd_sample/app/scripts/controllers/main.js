var mainControllers = angular.module('mddSampleApp')

    mainControllers.controller('MainCtrl', function ($scope) {

    $scope.text = 'Hello, Angular fanatic.';

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

    mainControllers.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
       $http({method: 'GET', url: 'scripts/data.json'}).
    success(function(data, status, headers, config) {
     $scope.projects = data;
     $scope.projectsOrder = 'name';
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('error in getting json');
    });
}]);

    mainControllers.controller('DetailsCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {

  $http({method: 'GET', url: 'scripts/data.json'}).
    success(function(data) {
       $scope.projs = data;
    $scope.whichItem = $routeParams.itemId;

    console.log($scope.projs);

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.projs.length-1;
    }

    if ($routeParams.itemId < $scope.projs.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('error in getting json');
    });
}]);