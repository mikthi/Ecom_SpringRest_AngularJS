gestionnaireApp.factory('gestionnaireFactory',function($http){
	var urlString="http://localhost:8080/Ecommerce_webServices_springREST_hibernate/gestionnaire";
	
	function getAllProduits(callback)
	{
		$http({
			method:'GET',
			url:urlString + "/getAllProduits" 
			}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	
	function getAllCategories(callback)
	{
		$http({
			method:'GET',
			url:urlString+"/getAllCategories" 
			}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	
	function addCategorie(categ, callback) {
		$http({
			method : 'POST',
			url : urlString + '/addCategorie',
			data: angular.toJson(categ),
			headers:{'Content-Type':'application/json'}
		}).success(function(response) {
			console.log(response);
			callback(response);
		}).error(function(response) {
		console.log('Erreur' + response.statusText);
		})
	}
	
	function addProduit(prod) {
		$http({
			method : 'POST',
			url : urlString + '/addProduit',
			data: angular.toJson(prod),
			headers:{'Content-Type':'application/json'}
		}).success(function(response) {
			console.log(response);
		}).error(function(response) {
		console.log('Erreur' + response.statusText);
		})
	}
	
	function removeCategorie(id_categorie, callback) {
		$http({
			method : 'DELETE',
			url : urlString + '/removeCategorie/' + id_categorie,
		}).success(function(response) {
			console.log(response);
			callback(response);
		}).error(function(response) {
		console.log('Erreur' + response.statusText);
		})
	}
	
	function removeProduit(id_produit, callback) {
		$http({
			method : 'DELETE',
			url : urlString + '/removeProduit/' + id_produit,
		}).success(function(response) {
			console.log(response);
			callback(response);
		}).error(function(response) {
		console.log('Erreur' + response.statusText);
		})
	}
	
	function updateCategorie(categ, callback) {
		$http({
			method : 'PUT',
			url : urlString + '/updateCategorie',
			data: angular.toJson(categ),
			headers:{'Content-Type':'application/json'}
		}).success(function(response) {
			console.log(response);
			callback(response);
		}).error(function(response) {
		console.log('Erreur' + response.statusText);
		})
	}
	
	function updateProduit(prod, callback) {
		$http({
			method : 'PUT',
			url : urlString + '/updateProduit',
			data: angular.toJson(prod),
			headers:{'Content-Type':'application/json'}
		}).success(function(response) {
			console.log(response);
			callback(response);
		}).error(function(response) {
		console.log('Erreur' + response.statusText);
		})
	}
	
	return {
		getAllProduits : getAllProduits,
		getAllCategories : getAllCategories,
		addCategorie : addCategorie,
		addProduit : addProduit,
		removeCategorie : removeCategorie,
		updateCategorie : updateCategorie,
		removeProduit : removeProduit,
		updateProduit : updateProduit
	}
});