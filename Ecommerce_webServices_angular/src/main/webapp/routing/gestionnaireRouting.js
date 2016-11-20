gestionnaireApp.config(function($routeProvider) {
	$routeProvider
	.when('/gestionnaire/listeCateg', {
		templateUrl : "partials/gestionnaire/getAllCategories.html",
	 controller:"getAllCategoriesCtrl"
		
	})
	.when('/gestionnaire/listeProd', {
		templateUrl : "partials/gestionnaire/getAllProduits.html",
	 controller:"getAllProduitsCtrl"
		
	})
	.when('/gestionnaire/ajoutCateg', {
		templateUrl : "partials/gestionnaire/formAjoutCateg.html",
	 controller:"addCategorieCtrl"
		
	})
	.when('/gestionnaire/ajoutProd', {
		templateUrl : "partials/gestionnaire/formAjoutProd.html",
	 controller:"addProduitCtrl"
		
	})
	.when('/gestionnaire/categUpdate', {
		templateUrl : "partials/gestionnaire/formUpdateCateg.html",
	 controller:"getAllCategoriesCtrl"
		
	})
	.when('/gestionnaire/prodUpdate', {
		templateUrl : "partials/gestionnaire/formUpdateProd.html",
	 controller:"getAllProduitsCtrl"
		
	})
	.otherwise({
		redirectTo : "gestionnaire/listeCateg"
	});
});

