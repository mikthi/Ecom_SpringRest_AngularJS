monApp.factory('clientFactory',function($http){
	var urlString="http://localhost:8080/Ecommerce_webServices_springREST_hibernate/client";
	
	function getAllProduits(callback)
	{
		$http({
			method:'GET',
			url:urlString+"/getAllProduits" 
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
	function getMontantPanier(listeProduit,callback)
	{
		$http({
			method:'POST',
			url:urlString+ "/getMontantPanier",
			headers:{
				'Content-Type':'application/json'
			},
			data:angular.toJson(listeProduit)
		}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	function getProduitPanier(listeProduit, callback)
	{
		$http({
			method:'POST',
			url:urlString+"/getProduitPanier",
			data:angular.toJson(listeProduit),
			headers:{
				 'Content-Type':'application/json'
			}
		}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	function getAllProduitsByCategorie(idSelectionCateg,callback)
	{
		$http({
			method:'GET',
			url:urlString+"/getAllProduitsByCategorie/" + idSelectionCateg
			}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	function consulterProduit(idSelectionProduit,callback)
	{
		$http({
			method:'GET',
			url:urlString+"/getProduitById/" + idSelectionProduit
			}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	function clientIsExist(client, callback)
	{
		$http({
			method:'POST',
			url:urlString+"/getClient",
			data:angular.toJson(client),
			headers:{
				 'Content-Type':'application/json'
			}
		}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	
	function enregistrerClient(client, callback)
	{
		$http({
			method:'POST',
			url:urlString+"/enregistrerClient",
			data:angular.toJson(client),
			headers:{
				 'Content-Type':'application/json'
			}
		}).success(function(response){
				console.log(response);
				callback(response);
			}).error(function(response){
				console.log("Erreur :" + response.statusText);
			});
	}
	
	function passerCommande(commande)
	{
		$http({
			method:'POST',
			url:urlString+"/enregistrerCommande",
			data:angular.toJson(commande),
			headers:{
				 'Content-Type':'application/json'
			}
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
	return {

		getAllProduits : getAllProduits,
		getAllCategories:getAllCategories,
		getAllProduitsByCategorie:getAllProduitsByCategorie,
		consulterProduit:consulterProduit,
		getMontantPanier:getMontantPanier,
		getProduitPanier:getProduitPanier,
		clientIsExist:clientIsExist,
		passerCommande:passerCommande,
		enregistrerClient:enregistrerClient,
		getAllCategories : getAllCategories

	}
});