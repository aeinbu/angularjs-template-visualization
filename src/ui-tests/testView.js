import angular from "angular"

angular
	.module("ui-tests")
	.component("testView", {
		bindings: {
			test: "<"
		},
		template: require("./testView.html"),
	})