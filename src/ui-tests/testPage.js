import angular from "angular"

angular
	.module("ui-tests")
	.component("testPage", {
		template: require("./testPage.html"),
		controller() {
			const $ctrl = {}

			$ctrl.tests = require("./testData")

			$ctrl.selectedTest = undefined

			$ctrl.onSelect = (test) => {
				$ctrl.selectedTest = test
			}

			return $ctrl;
		}
	})