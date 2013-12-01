var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/',
    {
      templateUrl:'app.html',
      controller:'AppCtrl'
    }
  )
  .when('/pizza', {
    template: "Yum!"
  })
  .otherwise({
    template: "This doesn't exist"
  });
});

app.controller('AppCtrl', function($scope, $route) {
  $scope.model = {
    message: "This is my app!!!"
  };
});
