angular.module('carFire').controller('carCtrl', function($scope, carRef, commentsRef){
	function($scope, carRef, commentsRef, $firebaseArray){
		$scope.car = $firebaseObject(carRef)
		$scope.comments = $firebaseObject(commentsRef)
	}
});