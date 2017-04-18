// $.getJSON("http://www.omdbapi.com/?s=" + $("#movieInput").val(), function(data){
			
			
// 		});
// $("#button").click(function(){
// 			$("#content").html("");
// 		$.getJSON("http://www.omdbapi.com/?s=" + $("#movieInput").val(), function(data){
// 			// document.getElementById("contentBox1").innerHTML += data.Search.Title;
// 			// document.getElementById("#movieInput").innerHTML = "";
// 			for(var i = 0; i < data.Search.length; i++){
// 				$("#content").append("<h1>" + data.Search[i].Title + "</h1>" + "<br><img src="+ data.Search[i].Poster +" />");
// 			}
			
// 		});
		
// 	});

var app = angular.module('movieApp', []);
app.controller('movieCtrl', function($scope, $http){

	

	$scope.showMovies = function(){
		
		$http.get("http://www.omdbapi.com/?s=" + $("#movieInput").val() + "&y=" + $("#yearInput").val() + "&type=" + $("#typeInput").val())
		.then(function(response){
			$scope.movies = response.data.Search;
			
		});
	};

	

	
	
});
















