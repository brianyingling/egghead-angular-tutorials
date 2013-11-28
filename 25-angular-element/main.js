var app = angular.module('app', []);

app.directive('dumbPassword', function() {

  // create a reference before we put it in the dom
  var validElement = angular.element("<div>{{model.input}}</div>");
  var link = function(scope, element) {
      scope.$watch('model.input', function(value) {
        if (value === 'password') {
          validElement.toggleClass('alert-box alert');
        }
      });
  };

  return {
    restrict: 'E',
    replace: true,  // replaces the html tag with the template
    template: '<div><input type="text" ng-model="model.input"></div>',
    compile: function(tElem) {
      tElem.append(validElement);
      return link;
    }
  };
});