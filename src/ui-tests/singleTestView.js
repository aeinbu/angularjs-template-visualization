import angular from "angular"
import { getSuppliedPropsFromSample, getExpectedPropsFromTemplate,	getUnusedProps, getMissingProps } from "./utils"

angular
	.module("ui-tests")
	.component("singleTestView", {
		bindings: {
			templateToTest: "<",
			sample: "<"
		},
		template: require("./singleTestView.html"),
		controller() {

			this.$onChanges = (changes) => {
				this.expectedProps = getExpectedPropsFromTemplate(this.templateToTest)
				const suppliedProps = getSuppliedPropsFromSample(this.sample)

				this.unusedProps = getUnusedProps(this.expectedProps, suppliedProps)
				this.missingProps = getMissingProps(this.expectedProps, suppliedProps)
			}

		}
	})