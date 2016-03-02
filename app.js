angular.module('carFire', ['ui.router', 'firebase'])

.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/cars')
	$stateProvider
		.state('car', {
			url: '/car',
			templateUrl: '/templates/car.html' ,
			controller: 'carsCtrl' ,
			resolve: {
				carsRef: function(carsService){
					return carsService.getCars()
				}
			}
		})
		.state('car', {
			url: '/cars/:id' ,
			templateUrl: '/templates/car.html',
			controller:  'carCtrl' ,
			resolve: {
				carRef: function($stateParams, carsService){
					return carsService.getCar($stateParams.id)
				}
				commentsRef: function($stateParams, carsService){
					return carsService.getComments($stateParams.id)
				}
			}
		})
})