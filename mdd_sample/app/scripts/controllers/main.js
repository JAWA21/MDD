var mainControllers = angular.module('mddSampleApp');
    mainControllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

    mainControllers.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
    //  $http.get('scripts/data.json').success(function(data) {
    //     console.log(data);
    //  $scope.projects = data;
    //  $scope.projectsOrder = 'name';
    //   console.log($scope.projects);
    // });
}]);