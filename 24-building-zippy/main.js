var app = angular.module('app', []);

app.directive('zippy', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: "@"
    },
    template: '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show=isContentVisible ng-transclude></div></div>',
    link: function(scope) {
      scope.toggleContent = function() {
        scope.isContentVisible = false;

        scope.toggleContent = function() {
          scope.isContentVisible = !scope.isContentVisible;
        };

      };
    }
  };
});