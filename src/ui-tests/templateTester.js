import angular from "angular"
import _ from "lodash"

angular
    .module("ui-tests")
    .component("templateTester", {
        bindings: {
            test: "<"
        },
        template: require("./templateTester.html"),
        controller() {
        }
    })
    // .component("testTemplateHolder", {
    //     bindings: {
    //         templateToTest: "<",
    //         testData: "<"
    //     },
    //     template: `<div ng-bind-html='$ctrl.renderedTemplate'></div>`,
    //     controller($sce, $interpolate, $compile, $scope, $rootScope) {
    //         this.renderedTemplate;

    //         this.$onChanges = (changes => {

    //             if (this.testData != undefined && this.templateToTest != undefined) {
    //                 const renderedTemplate = $interpolate(this.templateToTest)({
	// 					$ctrl: this.testData,
	// 					$watch: () => {}
	// 				})

	// 				const compiledTemplate = $compile(this.templateToTest)($scope)

	// 				this.renderedTemplate = $sce.trustAsHtml(renderedTemplate)
    //             }
    //         })
    //     }
    // })
    .directive("testTemplateHolder", function($compile, $interpolate){
		return{
			restrict: "E",
			scope:{
				templateToTest: "<",
				testData: "<"	
			},
			// template(element, attributes){
			// },
			link(scope, element, attributes) {
				console.log("***", scope.testData)
				const newScope = scope.$new(false)
				newScope.itemNumber = "11001122"
				

				// const interpolatedTemplate = $interpolate(scope.templateToTest)({$ctrl: scope.testData})
				// const compiledTemplate = $compile(interpolatedTemplate)
				const linkFn = $compile(scope.templateToTest)
				const attrs = {$ctrl: this.testData}
				element.replaceWith(linkFn(scope, undefined, attrs))
			}
		}


        // controller($sce, $interpolate, $compile, $scope, $rootScope) {
        //     this.renderedTemplate;

        //     this.$onChanges = (changes => {

        //         if (this.testData != undefined && this.templateToTest != undefined) {
        //             const renderedTemplate = $interpolate(this.templateToTest)({
		// 				$ctrl: this.testData,
		// 				$watch: () => {}
		// 			})

		// 			const compiledTemplate = $compile(this.templateToTest)($scope)

		// 			this.renderedTemplate = $sce.trustAsHtml(renderedTemplate)
        //         }
        //     })
        // }
    })
// .directive('testTemplate', function($compile) {
//     return {
// 		restrict: "E",
// 		// scope: {
// 		// 	test: "<"
// 		// },
// 		// template(element, attributes) {
// 		// 	console.log("*** We're in!", attributes.templateToTest, attributes.testData)
// 		// 	return "HELLO WORLD"
// 		// },
// 		link(scope, element, attr) {
// 			const template = require("../components/lotThumbnail.html")
// 			const compiledTemplate = $compile(template)(scope)
// 			element.replaceWith(compiledTemplate)
// 			console.log("***", scope)
// 		}
//     }
// })
