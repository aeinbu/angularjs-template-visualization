import angular from "angular"
require("font-awesome/css/font-awesome.min.css")

const app = angular.module("app", [])


app.config(() => {
	console.log("Starting AngularJS...")
})


require("./components")



