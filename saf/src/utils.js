var fs = require("fs");

const getInput = fileName => fs.readFileSync(__dirname + '/inputs/' + fileName, "utf-8", (err, data) => {
	return data.split("at")
})

const parseLines = data => data.split('\n')

const parseItemValues = line => {
	const splitStr = line.split(" at ")
	const unitPrice = parseFloat(splitStr[1])
	const quantityAndItems = splitStr[0].split(" ")
	const quantity = parseFloat(quantityAndItems.shift())
	return {
		unitPrice,
		quantity,
		itemTags: quantityAndItems
	}

}

const roundUp = number => parseFloat((Math.ceil(number*20)/20).toFixed(2))

module.exports = {
	getInput: getInput,
	parseLines: parseLines,
	parseItemValues: parseItemValues,
	roundUp: roundUp
}