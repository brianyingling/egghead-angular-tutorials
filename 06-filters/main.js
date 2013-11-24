var myApp = angular.module('myApp', []);

// sharing Data among controllers
myApp.factory('Data', function() {
  return {message: "I'm data from a message"};
});

myApp.filter('reverse', function(Data) {
  return function(text) {
    return text.split("").reverse().join('') + Data.message;
  };
});

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join('');
  };
}