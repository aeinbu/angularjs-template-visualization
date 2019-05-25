import angular from "angular"
import _ from "lodash"


angular
    .module("ui-tests")
    .component("templateTester", {
        bindings: {
            test: "<"
        },
        template: require("./templateTester.html")
    })
    .directive("testTemplateHolder", function($compile, $rootScope) {
        return {
            restrict: "E",
            scope: {
                templateToTest: "<",
                $ctrl: "<"
            },
            link(scope, element, attributes) {
                element.prepend($compile(scope.templateToTest)(scope))
            }
        }
    })
