var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/',
    {
      templateUrl:'views/app.html',
      controller:'ViewCtrl',
    }
  )
  .when('/new',
    {
      templateUrl: 'views/new.html',
      controller: 'NewCtrl',
      resolve: {
        loadData: viewCtrl.loadData
      }
    });
});

app.directive('error', function($rootScope) {
  return {
    restrict: 'E',
    template: '<div class="alert-box alert" ng-show="isError">Error!</div>',
    link: function(scope) {
      $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        scope.isError = false;
      });
    }
  };
});

app.controller('AppCtrl', function($scope, $rootScope, $route, $location) {
  $rootScope.$on('$routeChangeStart', function(event, current, previous, rejection) {
    console.log($scope, $rootScope, $route, $location);
  });
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
    console.log($scope, $rootScope, $route, $location);
  });
});

var viewCtrl = app.controller('ViewCtrl', function($scope, $route, $location) {
  console.log($scope);
  $location.path('/new');
});

app.controller('NewCtrl', function($scope, loadData, $template) {
  console.log($scope, loadData, $template);
});

viewCtrl.loadData = function($q, $timeout) {
  var defer = $q.defer();

  // page renders after 2 secs.
  $timeout(function() {
    defer.resolve({message:"success"});
  }, 2000);

  return defer.promise;
};
