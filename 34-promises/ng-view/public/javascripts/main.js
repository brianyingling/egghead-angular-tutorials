var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/',
    {
      templateUrl:'app.html',
      controller:'AppCtrl'
    }
  );
});

app.controller('AppCtrl', function($scope, $q) {

  var defer = $q.defer();
  
  defer.promise
    .then(function(weapon) {
      alert('you can have my ' + weapon);
      return 'bow';
    })
    .then(function(weapon) {
      alert('and my ' + weapon);
      return 'axe';
    })
    .then(function(weapon) {
      alert('and my ' + weapon);
    });

  defer.resolve('sword');

  $scope.model = {
    message: "This is my app!"
  };
});
