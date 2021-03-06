var myApp = angular.module('myApp', []);

// sharing Data among controllers
myApp.factory('Data', function() {
  return {message: "I'm data from a message"};
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