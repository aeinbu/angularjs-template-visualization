import angular from "angular"

const module = angular.module("app")
module.component("serializedThumbnail", {
    bindings: {},
    template: require("./serializedThumbnail.html"),
    controller() {
        this.itemName = "Styringsenhet"
        this.itemNumber = "SN299019"
        this.hasNonConformances = true
    }
})