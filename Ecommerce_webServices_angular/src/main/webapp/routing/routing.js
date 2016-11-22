monApp.config(function($routeProvider) {
	$routeProvider
	.when('/client/liste/', {
		templateUrl : "partials/SPA.html",
	 controller:"AccueilCtrl"
		 
	}).when('/client/panier/', {
		templateUrl : "partials/SPA.html",
		 controller:"panierCtrl"
	
	}).when('/gestionnaire/listeCateg/', {
		templateUrl : "partials/SPA.html",
	 controller:"getAllCategoriesCtrl"
		
	})
	.when('/gestionnaire/listeProd/', {
		templateUrl : "partials/corps/getAllProduits.html",
	 controller:"getAllCtrl"
	})
	.when('/client/consult/', {
		templateUrl : "partials/SPA.html",
	 controller:"consulterProduitCtrl"
	})
	.when('/client/commande/', {
		templateUrl : "partials/SPA.html",
	 controller:"espaceClientCtrl"
	})
	.when('/client/facture/', {
		templateUrl : "partials/SPA.html",
	 controller:"espaceClientCtrl"
	})
	.otherwise({
		redirectTo : '/client/liste/'
	});
});

