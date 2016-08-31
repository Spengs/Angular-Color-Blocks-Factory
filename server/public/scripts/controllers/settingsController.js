colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");


	  function addColor(color) {
	  	DataFactory.addColor(color);
	  }

	  $scope.addColor = addColor;
}]);
