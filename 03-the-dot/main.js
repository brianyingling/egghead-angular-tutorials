// To share data between controllers, 
// create a factory and pass that -- or inject
// data into controllers.


var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
  return {message:"I'm data from a service"};
});

// injecting our Data into this controller.
function FirstCtrl($scope, Data) {
  $scope.data = Data;

// $scope is not a model, but just a referenece
// Think of it as a property to assign models to

}

// injecting Data into the controller.
function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };

}