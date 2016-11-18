monApp.controller('login', function($scope, clientFactory) {
	
	$scope.changeTypeUtil=function(){
	
		$scope.typeUtilisateur=
			{
				"menu":2
			};
		console.log("typeUtilisateur apres modif" + $scope.typeUtilisateur.menu);
	
	};

	clientFactory.getAll(function(callback) {
		$scope.allProduits = callback;
	});
});