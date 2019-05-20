const { roundUp } = require('./utils.js');

class LineItem {

	findIntersection(rulesList, itemTags) {
		return rulesList.filter(
			element => itemTags.includes(element) ||
			itemTags.filter(tag => tag.includes(element)).length
		)
	}

	calculateSalesTax(unitPrice, quantity, itemTags, config) {
		const { rules, categories, taxAmounts } = config;
		let taxRate = 0;
		rules.forEach(rule => {
			const found = this.findIntersection(categories[rule.type], itemTags)
			if (found.length) {
				taxRate += taxAmounts[rule.hit]
			} else {
				taxRate += taxAmounts[rule.miss]
			}
		})
		return roundUp(quantity * unitPrice * taxRate);
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