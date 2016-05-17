(function(){
	angular.module('srpApp')
		.directive('products', function(){
			return {
				restrict: 'EA',
				templateUrl: './assets/js/views/products.html'
			};
		});
})();