var express = require("express");
// Making calls to node js api key
var app = express();
var rP = require("request-promise");
var apiKey = "2f4fe68403709710f406f4da7be00736";
var workingDir = "C:/Users/cpagu/Documents/GitHub/ScreenShow/";
// This is a route
// This gets executed when you reach "URL/"
app.get("/", function(res) {
	"use strict";
	res.send("Hello World!");
});
app.get("/movies", function(res) {
	"use strict";
	res.sendFile(workingDir + "movies.html");
});
app.get("/tvshows", function(res) {
	"use strict";
	res.sendFile(workingDir + "tvshow.html");
});
app.listen(3000, function() {
	"use strict";
	console.log("Example app listening on port 3000!");
});

function getMovie(movie) {
	"use strict";
	var options = {
		method: "GET",
		url: "https://api.themoviedb.org/3/search/movie",
		qs: {
			query: movie,
			language: "en-US",
			api_key: apiKey
		},
		headers: {
			"content-type": "application/json"
		},
		body: {},
		json: true
	};
	return rP(options);
}
app.get("/movies222", function(res) {
	"use strict";
	getMovie("Storks").then(function(value) {
		res.send("Movie: " + value.results[0].original_title + " Summary: " + value.results[0].overview + " ID: " + value.results[0].id);
	}, function(err) {
		console.log(err);
	});
});
