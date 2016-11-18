monApp.config(function($routeProvider) {
	$routeProvider
	.when('/client/liste', {
		templateUrl : "partials/SPA.html",
	 controller:"getAllCtrl"
		
	})
	.otherwise({
		redirectTo : '/client/liste'
	});
});

