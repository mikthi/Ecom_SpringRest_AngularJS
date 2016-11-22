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
			$rootScope.mot_cle = $scope.mot_cle;
			$location.path('gestionnaire/listeProduitsSearch');
		});
	}
});

gestionnaireApp.controller('giveProduitsBySearchCtrl', function($rootScope,
		$scope, gestionnaireFactory, $location) {
	$scope.searchProduits = $rootScope.searchProduits
	if ($scope.searchProduits.length < 1) {
		$scope.searchShow = false;
		$scope.message = "Désolé, votre recherche n'a donné aucun résultat."
	} else {
		$scope.searchShow = true;
		$scope.message = "Résultat de votre recherche"
	}

	// Modifier avec le lien modifier
	$scope.editLien = function(prod) {
		$rootScope.prodForm = prod;
		$location.path('gestionnaire/prodUpdate3')
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
			$location.path('gestionnaire/listeProd')
		})
	}
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

gestionnaireApp.controller('securityCtrl', function($scope,
		gestionnaireFactory, $location) {

	$scope.getAccess = function() {
		var login = $scope.login;
		var password = $scope.password;

		gestionnaireFactory.getPermission(login, password); //call the method in acccessFac to allow the user permission.
		$location.path('gestionnaire/listeCateg');
	}
});