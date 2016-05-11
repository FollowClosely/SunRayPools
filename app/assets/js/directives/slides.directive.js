angular.module('patternApp')
.directive('slides', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/partials/slides.html',
		controller: function ($scope){
			$scope.slides = [
				{
					imgSrc: 'img01.jpg',
					imgAttr: 400000	
				},
				{
					imgSrc: 'img02.jpg',
					imgAttr: 300000
				},
				{
					imgSrc: 'img03.jpg',
					imgAttr: 200000
				}
			];
		},
		controllerAs: 'slide'
	};
});


