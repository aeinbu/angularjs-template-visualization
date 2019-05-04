import angular from "angular"

const module = angular.module("app")
module.component("lotThumbnail", {
    bindings: {},
    template: require("./lotThumbnail.html"),
    controller() {
        this.itemName = "Superlim"
        this.itemNumber = "950013"
        this.hasNonConformances = true

        // return {
        //     itemName: "Superlim2",
        //     itemNumber: "950013",
        //     hasNonConformances: true
        // }
    }
})