import angular from "angular"

const module = angular.module("app")
module.component("lotThumbnail", {
    bindings: {},
    template: require("./lotThumbnail.html"),
    controller() {
        this.itemName = "Superlim"
        this.itemNumber = "950013"
        this.hasNonConformances = true
        this.registeredLots = [
            "LOT0001",
            "LOT0002",
        ]

    }
})