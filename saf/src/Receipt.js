const { getInput, parseLines, parseItemValues, roundUp } = require('./utils.js');
const LineItem = require('./LineItem.js');

class Receipt {
	constructor(config, inputFile) {
		this.config = config
		this.inputFile = inputFile
		this.lineItems = []
		this.salesTaxTotal = 0
		this.total
	}

	parseReceiptData() {
		const lines = parseLines(getInput(this.inputFile));
		return lines.map(line => parseItemValues(line))
	}

	createLineItems() {
		const lineItems = this.parseReceiptData()
		this.lineItems = lineItems.map(item => {
			return new LineItem(item, this.config)
		})
	}

	assignTotals() {
		this.salesTaxTotal = roundUp(
			this.lineItems.reduce((accumulator, current) => {
				return accumulator + current.salesTaxTotal
			}, 0)
		)
		this.total = this.lineItems.reduce((accumulator, current) => {
			return accumulator + current.total
		}, 0)
	}

	printReceipt() {
		this.createLineItems()
		this.assignTotals()
		
		this.lineItems.forEach(lineItem => {
			console.log(`${lineItem.quantity} ${lineItem.itemName}: ${(Math.round(lineItem.total * 100) / 100).toFixed(2)}`)
		})
		console.log(`Sales Taxes: ${this.salesTaxTotal.toFixed(2)}`)
		console.log(`Total: ${this.total.toFixed(2)}`)
	}
}

module.exports = Receipt