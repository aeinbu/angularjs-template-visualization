module.exports = {
	"title": "serializedThumbnail",
	"templateToTest": require("../../components/serializedThumbnail.html"),
	"testData": [{
		"itemName": "langt-sn-item-navn",
		"itemNumber": "11223344",
		"quantity" : 1,
		"hasNonConformances": true,
		"listOfNumbers": [1,10,100,1000]
	},{
		"itemName": "kort",
		"itemNumber": "XM1122",
		"quantity" : 100,
		"hasNonConformances": false,
		"listOfNumbers": []
	},{
		"itemName": null,
		"itemNumber": "112233",
		"quantity" : 1.5,
		"hasNonConformances": true,
		"listOfNumbers": undefined		
	},{
		"itemName": "kort",
		"itemNumber": null,
		"quantity" : null,
		"hasNonConformances": false
	}]
}