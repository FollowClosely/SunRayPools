(function(){
	angular.module('srpApp')
		.directive('reviews', function(){

			return {
				restrict: 'EA',
				templateUrl: './assets/js/views/reviews.html'
			};
		});
})();