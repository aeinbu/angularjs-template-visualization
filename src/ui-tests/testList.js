import angular from "angular"

angular
	.module("ui-tests")
	.component("testList", {
		template: `
			<ul>
        	<li ng-repeat="test in $ctrl.tests">
            	<a href="#{{test.templateToTest}}"
               	   class="background-color: tan; font-family: 'Courier New', Courier, monospace">
					{{test.title || test.templateToTest}}
            	</a>
	        </li>
		</ul>`,
		controller() {

			const tests = [
				require("./testData/lotThumbnail.json")
			]

			return {tests}
		}
	})