class LineItem {

	findIntersection(priorityList, itemTags) {
		return priorityList.filter(
			//if the priority list contains an exact match of an item tag
			element => itemTags.includes(element) ||
			// if the item tag contains a singular substring from the priority list
			itemTags.filter(tag => tag.includes(element)).length
		)
	}

	calculateSalesTax(unitPrice, quantity, itemTags, config) {
		const { priorities, taxAmounts } = config;
		for (let p of priorities) {
			let priorityList = config[p]
			let intersection = this.findIntersection(priorityList, itemTags)
			if (intersection.length){
				return ((quantity * unitPrice) * taxAmounts[p])
			}

			if (p === 'basic'){
				return ((quantity * unitPrice) * taxAmounts['basic'])
			}
		}

	}

	constructor({ quantity, itemTags, unitPrice}, config) {
		this.quantity = quantity
		this.salesTaxTotal = this.calculateSalesTax(unitPrice, quantity, itemTags, config)
		this.itemName = itemTags.join(" ")
		this.beforeTaxTotal = quantity * unitPrice
		this.total = this.beforeTaxTotal + this.salesTaxTotal
	}
}

module.exports = LineItem