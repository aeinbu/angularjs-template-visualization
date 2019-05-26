module.exports = {
    "title": "lotThumbnail",
    "templateToTest": require("../../components/lotThumbnail.html"),
    "samples": [{
        "itemName": "langt-lot-item-navn",
        "itemNumber": "11223344",
        "hasNonConformances": true,
        "registeredLots": ["LOT0001", "LOT0020", "LOT0400", "LOT8000"]
    }, {
        "itemName": "kort",
        "itemNumber": "XM1122",
        "hasNonConformances": false,
        "registeredLots": []
    }, {
        "itemName": null,
        "itemNumber": "112233",
        "hasNonConformances": true,
        "registeredLots": undefined
    }, {
        "itemName": "kort",
        "itemNumber": null,
        "hasNonConformances": false,
        "registeredLots": undefined
    }]
}
