var app = angular.module('app', []);

// when the app is done loading all the modules and is 
// ready for you to manipulate.
app.run(function($templateCache) {
  $templateCache.put('zippy.html',"<div><h3 ng-click='toggleContent()'>{{title}}</h3><div ng-show='isContentVisible' ng-transclude></div></div>");
});

app.directive('zippy', function($templateCache) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    // template: $templateCache.get('zippy.html'),
    templateUrl: 'zippy.html',
    link: function(scope) {
      scope.isContentVisible = false;
      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
      };
    }
  };
});