angular.module('patternApp')
.directive('resources', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/partials/resource.html',
		controller: function($scope){




			$scope.quotes = [
				{ Bob : 'Great!' },
				{ Janet : 'A+' },
				{ Sally : '5 stars' },
				{ Brit : 'Win.' },
				{ Ash : 'Yes!' }
			];

			$scope.headshots = [
				'headshot01.jpg',
				'headshot02.jpg',
				'headshot03.jpg',
				'headshot04.jpg',
				'headshot05.jpg'
			];

			$scope.backgrounds = [
				'resourcebg01.jpg',
				'resourcebg02.jpg',
				'resourcebg03.jpg'
			];
		},
		controllerAs: 'resource'
	}
});