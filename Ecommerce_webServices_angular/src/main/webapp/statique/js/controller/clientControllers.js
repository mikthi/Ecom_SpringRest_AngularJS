monApp.controller('AccueilCtrl', function($scope, $route, $rootScope,
		$location, $cookies, clientFactory) {

	$scope.selectionFiltreCategorie = function(id) {
		$scope.navigationClient.choixCategorie = id; // 0: tous les

	}
	function actualiserAccueilClient() {
		clientFactory.getAllCategories(function(callback) {
			$scope.allCategories = callback;
		});
		var selectionCateg = $scope.navigationClient.choixCategorie;
		if (selectionCateg == 0) {
			// liste de tous les produits
			clientFactory.getAllProduits(function(callback) {
				$scope.allProduits = callback;
			});

		} else {
			clientFactory.getAllProduitsByCategorie(selectionCateg, function(
					callback) {
				$scope.allProduits = callback;
			});
		}
	}

	$scope.consulterProduit = function(idSelectionProduit) {
		clientFactory.consulterProduit(idSelectionProduit, function(callback) {
			$rootScope.consulterProduit = callback;
		});
		$scope.navigationProduitDetailles();
	}
	// à chaque appel du controller
	actualiserAccueilClient();
});

monApp.controller('consulterProduitCtrl', function($scope, $rootScope,
		$location, $route, $cookies, clientFactory) {
	
	$scope.ajouterProduitAuPanier = function(id, quantite) {
		$cookies.put(id, quantite);
		$scope.navigationAccueil();

	}

});
monApp.controller('panierCtrl', function($scope, $rootScope, $location, $route,
		$cookies, clientFactory) {

	clientFactory.getMontantPanier($cookies.getAll(), function(callback) {
		$scope.montantTotal = callback;
	});
	clientFactory.getProduitPanier($cookies.getAll(), function(callback) {
		$scope.listeProduitPanier = callback;
	});

	$scope.supprimerProduitPanier = function(id) {
		$cookies.remove(id);
		$location.path("client/panier");
	}
	$scope.getQuantite = function(id) {
		return $cookies.get(id);
	}

});
monApp.controller('espaceClientCtrl', function($scope, $rootScope, $location,
		$route, $cookies, clientFactory) {

	$scope.clientAEnregistrer = {

		id_client : "",
		nom : "",
		prenom : "",
		mail : "",
		telephone : "",
		voie : "",
		ville : "",
		codePostal : ""
	};
	$scope.clientATrouver = {
		id_client : "",
		nom : "",
		prenom : "",
		mail : "",
		telephone : "",
		voie : "",
		ville : "",
		codePostal : ""
	};

	$scope.enregistrerClientCommande = function() {
		console.log($scope.clientAEnregistrer);
		var clientEntre=$scope.clientAEnregistrer;
		clientFactory.enregistrerClient(clientEntre, function(callback) {
			$scope.idClient = callback;
		});
		$scope.commande = {
			"id_commande" : "",
			"dateCommande" : new Date(),
			"client" :clientEntre,
			"produitCommande" : $cookies.getAll()
		};
		console.log("objet commande : " + $scope.commande);
		clientFactory.passerCommande($scope.commande);
		$cookies = undefined;
		$scope.navigationAccueil();
		$scope.clientAEnregistrer = {
				id_client : "",
				nom : "",
				prenom : "",
				mail : "",
				telephone : "",
				voie : "",
				ville : "",
				codePostal : ""
			};
	}
	$scope.enregistrerCommande = function() {
		
		clientFactory.clientIsExist($scope.clientATrouver, function(callback) {
			$scope.clientATrouver = callback;
		});

		var commande = {
			dateCommande : new Date(),
			client : $scope.clientATrouver,
			produitCommande : $cookies.getAll()
		}
		if ($scope.clientATrouver.id_client != "") {
			clientFactory.passerCommande(commande);
			$cookies = null;
			$scope.navigationAccueil();
		}
		else
		{
			$scope.message="Veuillez vous inscrire ou entrer correctement vos coordonées";
		}
		$scope.clientATrouver = {
			id_client : "",
			nom : "",
			prenom : "",
			mail : "",
			telephone : "",
			voie : "",
			ville : "",
			codePostal : ""
		};
	}

});