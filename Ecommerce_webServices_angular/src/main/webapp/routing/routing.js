monApp.config(function($routeProvider) {
	$routeProvider
	.when('/client/liste', {
		templateUrl : "partials/getAll.html",
	 controller:"getAllCtrl"
	})
	.otherwise({
		redirectTo : '/client/liste'
	});
});

