monApp.controller('getAllCtrl', function($scope, clientFactory) {
	clientFactory.getAll(function(callback) {
		$scope.allProduits = callback;
	});
});