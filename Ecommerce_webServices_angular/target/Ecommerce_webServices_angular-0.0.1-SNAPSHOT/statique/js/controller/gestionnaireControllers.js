monApp.controller('/login', function($scope, clientFactory) {
	clientFactory.getAll(function(callback) {
		$scope.allProduits = callback;
	});
});