const { getInput, parseLines, parseItemValues, roundUp } = require('./../src/utils.js');

test('reads a text file and returns a string', () => {
	const input = 'input1.txt';
	const output = "2 book at 12.49\n1 music CD at 14.99\n1 chocolate bar at 0.85"
	expect(getInput(input)).toEqual(output)
})

test('parses input string into arrays of line items', () => {
	const input = getInput('input2.txt')
	const output = [
		"1 imported box of chocolates at 10.00",
		"1 imported bottle of perfume at 47.50"
    ]
	expect(parseLines(input)).toEqual(output)
})

test('parses a line item string into its values', () => {
	const input = getInput('input3.txt')
	const lines = parseLines(input);
	const itemValues = lines.map(line => parseItemValues(line))
	const output = [
		{
			"itemTags": ["imported", "bottle", "of", "perfume"],
			"quantity": 1,
			"unitPrice": 27.99
		}, {
			"itemTags": ["bottle", "of", "perfume"],
			"quantity": 1,
			"unitPrice": 18.99
		},{
			"itemTags": ["packet", "of", "headache", "pills"],
			"quantity": 1,
			"unitPrice": 9.75
		}, {
			"itemTags": ["box", "of", "imported", "chocolates"],
			"quantity": 3,
			"unitPrice": 11.25
		}
	]
	expect(itemValues).toEqual(output)
})

test('rounds up a number to nearest .05', () => {
	expect(roundUp(2.51)).toBe(2.55)
	expect(roundUp(2.50)).toBe(2.50)
	expect(roundUp(2.56)).toBe(2.60)
})