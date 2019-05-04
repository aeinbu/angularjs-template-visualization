import angular from "angular"

angular
    .module("ui-tests")
    .component("template-tester", {
        bindings: {
            templateToTest: "<",
            testData: "<"
        },
        template: `
			<h2>Test of {{$ctrl.templateToTest}}</h2>

			<div ng-if="Array.isArray($testData)"
				 ng-repeat="sample in $ctrl.testData">
				<pre>{{sample}}</pre>
				<test-template test-data="sample"
							   template-to-test="$ctrl.templateToTest"/>
			</div>

			<div ng-if="!Array.isArray($testData)">
				<pre>{{$ctrl.testData}}</pre>
				<test-template test-data="$ctrl.testData"
							   template-to-test="$ctrl.templateToTest">
			</div>

			`
	})
	.component("test-template", {
		bindings: {
			templateToTest: "<",
			testData: "<"
		},
		// template: reguire(""),
		template: `<h1>TEMPLATE UNDER TEST GOES HERE!!!</h1>`,
		controller() {
			return this.testData;
		}
	})
