monApp.config(function($routeProvider) {
	$routeProvider
	.when('/client/liste', {
		templateUrl : "partials/SPA.html",
	 controller:"getAllCtrl"
		
	})
	.when('/gestionnaire/listeCateg', {
		templateUrl : "partials/SPA.html",
	 controller:"getAllCategoriesCtrl"
		
	})
	.when('/gestionnaire/listeProd', {
		templateUrl : "partials/corps/getAllProduits.html",
	 controller:"getAllCtrl"
		
	})
	.otherwise({
		redirectTo : '/client/liste'
	});
});

