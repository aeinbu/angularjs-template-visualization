import angular from "angular"

angular
	.module("ui-tests")
	.component("testPage", {
		template: require("./testPage.html"),
		controller() {

			let tests = [
				require("./testData/lotThumbnail.js")
			]
			let selectedTest = tests[0]

			return {
				tests,
				selectedTest
			}
		}
	})