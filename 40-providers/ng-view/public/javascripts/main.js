var app = angular.module('app', ['ngRoute']);

app.provider('game', function() {
  var type;
  return {
    setType: function(value) {
      type = value;
    },
    $get: function() {
      return {
        title: type + 'Craft'
      };
    }
  };
});

app.config(function(gameProvider) {
  gameProvider.setType('War');
});

app.controller('AppCtrl', function($scope, game) {
  $scope.title = game.title;
});