monApp.controller('getAllCtrl', function($scope, $location, clientFactory) {
	

	$scope.changeTypeUtilGest=function(){
		console.log("typeUtilisateur avant modif" + $scope.typeUtilisateur.menu);
		$scope.typeUtilisateur=
			{
				"menu":1,
				"corps":1
			};
		console.log("typeUtilisateur apres modif" + $scope.typeUtilisateur.menu);
	
	};
	$scope.changeTypeUtilClient=function()	{
		console.log("typeUtilisateur avant modif" + $scope.typeUtilisateur.menu);
		$scope.typeUtilisateur=
			{
				"menu":2,
				"corps":1
			};
		console.log("typeUtilisateur apres modif" + $scope.typeUtilisateur.menu);
	
	};
	
	clientFactory.getAll(function(callback) {
		
		$scope.allProduits = callback;
		
	});
	
	
});