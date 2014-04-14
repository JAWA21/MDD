var mainControllers = angular.module('mddSampleApp')

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

     var successCallback function(data){
        for (var i = data.length - 1; i >= 0; i++) {

            console.log(data[i]);
        };

     };

     $http.get('../scripts/data.json').success(successCallback);



    //    $http({method: 'GET', url: 'scripts/data.json'}).
    // success(function(data, status, headers, config) {
    //    console.log(data);
    //  $scope.projects = data;
    //  $scope.projectsOrder = 'name';
    //   console.log($scope.projects);
    // }).
    // error(function(data, status, headers, config) {
    //   // called asynchronously if an error occurs
    //   // or server returns response with an error status.
    //   console.log('error in get json');
    // });
}]);