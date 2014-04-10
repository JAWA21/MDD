var mainControllers = angular.module('mddSampleApp');
  mainControllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
    mainControllers.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $http.get('js/data.json').success(function(data) {
     $scope.artists = data;
     $scope.artistOrder = 'name';
  });
  });

    artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);