var app = angular.module('app', []);

app.controller('MyCtrl', function($scope, $http, $parse) {
  console.log($scope);
  console.log($http);
  console.log($parse);
});

app.directive('myDirective', function() {
  return {
    link: function(scope, element, attrs) {
      // console.log(element);
    }
  };
});