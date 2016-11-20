monApp.controller('getAllCtrl', function($scope, $location, clientFactory) {

	$scope.changeTypeUtilGest = function() {
		console
				.log("typeUtilisateur avant modif"
						+ $scope.typeUtilisateur.menu);
		$scope.typeUtilisateur = {
			"menu" : 2,
			"corps" : 2
		};
		console
				.log("typeUtilisateur apres modif"
						+ $scope.typeUtilisateur.menu);

	};
	$scope.changeTypeUtilClient = function() {
		console
				.log("typeUtilisateur avant modif"
						+ $scope.typeUtilisateur.menu);
		$scope.typeUtilisateur = {
			"menu" : 1,
			"corps" : 1
		};
		console
				.log("typeUtilisateur apres modif"
						+ $scope.typeUtilisateur.menu);

	};
	
	$scope.changeTypeUtil = function() {

		$scope.typeUtilisateur = {
			"menu" : 2,
			"corps" : 1
		};
	};

	clientFactory.getAll(function(callback) {

		$scope.allProduits = callback;

	});

});

monApp.controller('getAllCategoriesCtrl', function($scope, clientFactory) {

	$scope.changeTypeUtil = function() {

		$scope.typeUtilisateur = {
			"menu" : 2,
			"corps" : 2
		};
	};

	clientFactory.getAllCategories(function(callback) {
		$scope.allCategories = callback;
	});
});