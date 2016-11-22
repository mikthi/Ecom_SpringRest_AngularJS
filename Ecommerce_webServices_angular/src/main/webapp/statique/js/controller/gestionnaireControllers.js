gestionnaireApp.controller('getAllProduitsCtrl', function($rootScope, $scope,
		$location, gestionnaireFactory) {
	gestionnaireFactory.getAllProduits(function(callback) {
		$scope.allProduits = callback;
	});

	// Modifier avec le lien modifier
	$scope.editLien = function(prod) {
		$rootScope.prodForm = prod;
		$location.path('gestionnaire/prodUpdate')
		gestionnaireFactory.getAllCategories(function(callback) {
			$rootScope.allCategories = callback;
		});
	}

	$scope.prodForm = $rootScope.prodForm;
	$scope.allCategories = $rootScope.allCategories;

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
	});

	// Récupérer la liste des produits par catégories
	$scope.getProduitsByCateg = function(categ) {
		$rootScope.produits = undefined;
		gestionnaireFactory.getProduitsByIdCategorie(categ.id_categorie,
				function(callback) {
					$rootScope.produits = callback;
					$location.path('gestionnaire/listeProdByCateg');
				});
	}

	// Modifier avec le lien modifier
	$scope.editLien = function(categ) {
		$rootScope.categForm = categ;
		$location.path('gestionnaire/categUpdate')
	}

	$scope.categForm = $rootScope.categForm;

	$scope.modifierCateg = function() {
		gestionnaireFactory.updateCategorie($scope.categForm,
				function(callback) {
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
	$scope.prod = undefined;
	gestionnaireFactory.getAllCategories(function(callback) {
		$scope.allCategories = callback;
	})
	$scope.ajouterProd = function() {
		gestionnaireFactory.addProduit($scope.prod, function() {
			$scope.prod = undefined;
		});
	}
});

gestionnaireApp.controller('getProduitsBySearchCtrl', function($rootScope,
		$scope, gestionnaireFactory, $location) {
	$scope.mot_cle = undefined;
	$scope.searchProduits = function() {
		gestionnaireFactory.getProduitsBySearch($scope.mot_cle, function(
				callback) {
			$rootScope.searchProduits = callback;
			$location.path('gestionnaire/listeProduitsSearch');
		});
	}
});

gestionnaireApp.controller('giveProduitsBySearchCtrl', function($rootScope,
		$scope, gestionnaireFactory, $location) {
	$scope.searchProduits = $rootScope.searchProduits
});

gestionnaireApp.controller('getProduitsByCategCtrl', function($rootScope,
		$scope, gestionnaireFactory, $location) {
	$scope.produits = $rootScope.produits;

	// Modifier avec le lien modifier
	$scope.editLien = function(prod) {
		$rootScope.prodForm = prod;
		$location.path('gestionnaire/prodUpdate2')
		gestionnaireFactory.getAllCategories(function(callback) {
			$rootScope.allCategories = callback;
		});
	}

	$scope.prodForm = $rootScope.prodForm;
	$scope.allCategories = $rootScope.allCategories;

	$scope.modifierProd = function() {
		gestionnaireFactory.updateProduit($scope.prodForm, function(callback) {
			gestionnaireFactory.getProduitsByIdCategorie(
					$scope.prodForm.categorie.id_categorie, function(callback) {
						$scope.produits = callback;
					});
			$location.path('gestionnaire/listeProdByCateg')
		});
	}

	// Supprimer avec le lien supprimer
	$scope.deleteLien = function(prod) {
		gestionnaireFactory.removeProduit(prod.id_produit, function(callback) {
			gestionnaireFactory.getProduitsByIdCategorie(
					prod.categorie.id_categorie, function(callback) {
						$scope.produits = callback;
					});
		})
	}

});