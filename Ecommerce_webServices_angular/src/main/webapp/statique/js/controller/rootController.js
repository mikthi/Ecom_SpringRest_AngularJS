monApp.controller('rootController', function($rootScope, $location, $route, $cookies, $scope) {

	$scope.typeUtilisateur={
				"menu":10,
				"corps":10
		}; // 1 : utilisateur accueil, 2 : gestionnaire accueil, 3 : factureclient
	$scope.navigationClient={
				"choixCategorie":0, //0: tous les produits, autres : id de la catégorie
				"idClient":0
		}
	
		$cookies=undefined;
		$scope.navigationPanier=function(){		
			$scope.typeUtilisateur = {
					"menu" : 12,
					"corps" : 12
				}
				$location.path("/client/panier");
			
		}
		$scope.navigationAccueil = function() {
			$scope.typeUtilisateur = {
				"menu" : 10,
				"corps" : 10
			}
			$location.path("/client/liste");
		};
		$scope.navigationFacture=function(){
			$scope.typeUtilisateur = {
					"menu" : 13,
					"corps" : 13
				}
				$location.path("/client/commande");
		}
		
		$scope.navigationProduitDetailles=function(){
			$scope.typeUtilisateur = {
			"menu" : 11,
			"corps" : 11
		};
		$location.path("/client/consult")
		}
});