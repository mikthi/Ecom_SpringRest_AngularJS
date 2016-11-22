gestionnaireApp.config(function($routeProvider) {
	$routeProvider.when('/gestionnaire/listeCateg', {
		templateUrl : "partials/gestionnaire/getAllCategories.html",
		controller : "getAllCategoriesCtrl"

	}).when('/gestionnaire/listeCateg', {
		templateUrl : "partials/gestionnaire/getAllCategories.html",
		controller : "getAllCategoriesCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/listeProd', {
		templateUrl : "partials/gestionnaire/getAllProduits.html",
		controller : "getAllProduitsCtrl",
			resolve : {
				"check" : function(gestionnaireFactory, $location) {

					if (gestionnaireFactory.checkPermission()) {
					} else {
						$location.path('gestionnaire/login');
					}
				}
			}

	}).when('/gestionnaire/ajoutCateg', {
		templateUrl : "partials/gestionnaire/formAjoutCateg.html",
		controller : "addCategorieCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/ajoutProd', {
		templateUrl : "partials/gestionnaire/formAjoutProd.html",
		controller : "addProduitCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/categUpdate', {
		templateUrl : "partials/gestionnaire/formUpdateCateg.html",
		controller : "getAllCategoriesCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/prodUpdate', {
		templateUrl : "partials/gestionnaire/formUpdateProd.html",
		controller : "getAllProduitsCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/prodUpdate2', {
		templateUrl : "partials/gestionnaire/formUpdateProd.html",
		controller : "getProduitsByCategCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/listeProduitsSearch/', {
		templateUrl : "partials/gestionnaire/getProduitsSearch.html",
		controller : "giveProduitsBySearchCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/listeProdByCateg/', {
		templateUrl : "partials/gestionnaire/getProduitsByCateg.html",
		controller : "getProduitsByCategCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).when('/gestionnaire/login', {
		templateUrl : "partials/gestionnaire/login.html",
		controller : "securityCtrl",
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
				} else {
					$location.path('gestionnaire/login');
				}
			}
		}

	}).otherwise({
		resolve : {
			"check" : function(gestionnaireFactory, $location) {

				if (gestionnaireFactory.checkPermission()) {
					$location.path('gestionnaire/listeCateg');
				} else {
					$location.path('gestionnaire/login');
//					alert("You don't have access here");
				}
			}
		}
	});
});
