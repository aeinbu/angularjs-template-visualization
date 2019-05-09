module.exports = {
	"title": "lotThumbnail",
	"templateToTest": require("../../components/lotThumbnail.html"),
	"testData": [{
		"itemName": "langt-item-navn",
		"itemNumber": "11223344",
		"quantity" : 1,
		"hasNonConformances": true
	},{
		"itemName": "kort",
		"itemNumber": "XM1122",
		"quantity" : 100,
		"hasNonConformances": false
	},{
		"itemName": null,
		"itemNumber": "112233",
		"quantity" : 1.5,
		"hasNonConformances": true
	},{
		"itemName": "kort",
		"itemNumber": null,
		"quantity" : null,
		"hasNonConformances": false
	}]
}