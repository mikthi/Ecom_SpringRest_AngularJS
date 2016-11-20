monApp.controller('rootController', function($rootScope,$scope) {

		$scope.typeUtilisateur={
				"menu":2,
				"corps":2
		}; // 1 : utilisateur accueil, 2 : gestionnaire accueil, 3 : factureclient

	console.log("typeUtilisateur scope apres initialisation" + $scope.typeUtilisateur.menu);
});