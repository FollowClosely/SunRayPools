(function(){
	angular.module('srpApp')
	.directive('resources', function(){
		return {
			restrict: 'E',
			templateUrl: './assets/js/views/resources.html'
		};
	});
})();