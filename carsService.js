angular.module('carFire').service('carService', function($firebase){

	var url = 'https://carscarscars.firebaseio.com/'
	this.getCars = function()(
		return carsRef = new Firebase(url)
	);

	var carUrl = 
	this.getCar = function(id) {
		return carRef = new Firebase(url + '/' + id);

	};
	this.getComments = function(id){
		return commentsRef = new Firebase(url + '/' + id + '/' + commens);
	};

});