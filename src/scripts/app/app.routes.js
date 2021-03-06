blogApp.config(["$routeProvider", "$locationProvider", "VIEWS_ROOT", "POSTS_ROOT", function($routeProvider, $locationProvider, VIEWS_ROOT, POSTS_ROOT) {

	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('!');

	$routeProvider
	.when('/',
		{
			templateUrl:VIEWS_ROOT + "home.html"
		}
	)
	.when('/portfolio',
		{
			templateUrl:VIEWS_ROOT + "portfolio.html"
		}
	)
	.when('/writing',
		{
			templateUrl:VIEWS_ROOT + "writing.html"
		}
	)
	.when('/writing/series',
		{
			templateUrl:VIEWS_ROOT + "series.html"
		}
	)
	.when('/writing/series/:seriesRouteParam',
		{
			templateUrl: VIEWS_ROOT + "seriesArticle.html",
            controller: "seriesRouteCtrl",
            reloadOnSearch: false
		}
	)
	.when('/writing/article/:articleRouteParam',
		{
			templateUrl: VIEWS_ROOT + "article.html",
            controller: "postRouteCtrl"
		}
	)
	.when('/contact',
		{
			templateUrl:VIEWS_ROOT + "contact.html"
		}
	)
	.otherwise(
		{
			templateUrl:VIEWS_ROOT + "404.html"
		}
	);
}]);
