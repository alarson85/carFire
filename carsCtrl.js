angular.module('carFire').controller('carsCtrl', function($scope, $firebaseArray, $firebaseObject){

	$scope.cars = $firebaseArray(cars)
	$scope.addCar = function(carObj){
		$scope.cars.$add(carObj)
			.then(function(ref){
				console.l
			})
	}
});