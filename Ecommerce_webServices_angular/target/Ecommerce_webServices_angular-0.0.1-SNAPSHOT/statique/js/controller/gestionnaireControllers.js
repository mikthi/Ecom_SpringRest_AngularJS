monApp.controller('/login', function($scope, clientFactory) {
	
	$scope.changeTypeUtil=function(){
		typeUtilisateur.menu=1;
	};
	clientFactory.getAll(function(callback) {
		$scope.allProduits = callback;
	});
});