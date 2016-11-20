gestionnaireApp.controller('getAllProduitsCtrl', function($rootScope, $scope,
		$location, gestionnaireFactory) {
	gestionnaireFactory.getAllProduits(function(callback) {
		$scope.allProduits = callback;
	});

	// Modifier avec le lien modifier
	$scope.editLien = function(prod) {
		$rootScope.prodForm = prod;
		$location.path('gestionnaire/prodUpdate')
	}

	$scope.prodForm = $rootScope.prodForm;

	$scope.modifierProd = function() {
		gestionnaireFactory.updateProduit($scope.prodForm, function(callback) {
			$location.path('gestionnaire/listeProd')
		});
	}

	// Supprimer avec le lien supprimer
	$scope.deleteLien = function(prod) {
		gestionnaireFactory.removeProduit(prod.id_produit, function(callback) {
			gestionnaireFactory.getAllProduits(function(callback) {
				$scope.allProduits = callback;
			})
		})
	}
});

gestionnaireApp.controller('getAllCategoriesCtrl', function($rootScope, $scope,
		gestionnaireFactory, $location) {
	gestionnaireFactory.getAllCategories(function(callback) {
		$scope.allCategories = callback;

		// Modifier avec le lien modifier
		$scope.editLien = function(categ) {
			$rootScope.categForm = categ;
			$location.path('gestionnaire/categUpdate')
		}

		$scope.categForm = $rootScope.categForm;

		$scope.modifierCateg = function() {
			gestionnaireFactory.updateCategorie($scope.categForm, function(
					callback) {
				$location.path('gestionnaire/listeCateg')
			});
		}

		// Supprimer avec le lien supprimer
		$scope.deleteLien = function(categ) {
			gestionnaireFactory.removeCategorie(categ.id_categorie, function(
					callback) {
				gestionnaireFactory.getAllCategories(function(callback) {
					$scope.allCategories = callback;
				})
			})
		}
	});
});

gestionnaireApp.controller('addCategorieCtrl', function($scope,
		gestionnaireFactory) {
	$scope.categ = {
		nom : "",
		description : ""
	}
	$scope.ajouterCateg = function() {
		gestionnaireFactory.addCategorie($scope.categ, function() {
			$scope.categ = undefined;
		});
	}

});

gestionnaireApp.controller('addProduitCtrl', function($scope,
		gestionnaireFactory) {
	$scope.prod = {
		nom : "",
		description : "",
		categorie : {
			id_categorie : ""
		}
	}
	$scope.ajouterProd = function() {
		gestionnaireFactory.addProduit($scope.prod, function() {
			$scope.prod = undefined;
		});
	}
});