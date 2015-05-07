blogApp.factory("blogPostsFactory", ["$http", "$q", "POSTS_ROOT", function($http, $q, POSTS_ROOT) {
	
	var blogposts = [];

	// TODO: defer returning this function untill $http.get success
   	return function() {
   		var defer = $q.defer();

   		$http.get("http://localhost:8080/blogposts/blogposts.json")
		.success(function(data) {
			defer.resolve(data);
		})
		.error(function(data, status, headers, config) {
			console.log("blogposts json http request failed in blogPostsFactory \nError: " + data);
		});

		return defer.promise;
   	};
 }]);