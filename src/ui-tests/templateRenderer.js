import angular from "angular"

angular
    .module("ui-tests")
    .directive("templateRenderer", function($compile) {
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
