monApp.factory('clientFactory',function($http){
	var urlString="http://localhost:8080/Ecommerce_webServices_springREST_hibernate/client";
	
	function getAll(callback)
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
	
	return {
		getAll : getAll,
		getAllCategories : getAllCategories
	}
});