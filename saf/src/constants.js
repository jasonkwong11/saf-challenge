const BASIC_SALES_TAX = .10;
const IMPORT_TAX = .05;

const BOOKS = [
	'book',
	'encyclopedia',
	'world book',
	'hardcover',
	'journal'
]

const FOOD = [
	'apple',
	'bread',
	'pasta',
	'chocolate',
	'steak'
]

const MEDICAL = [
	'pill',
	'ointment',
	'crutches',
	'band-aid'
]

const IMPORTS = [
	'foreign',
	'import',
	'imported',
	'exotic',
	'overseas'
]

const config = {
	taxAmounts: {
		basic: BASIC_SALES_TAX,
		imports: IMPORT_TAX,
		noTax: 0
	},
	categories: {
		exemptions: [...BOOKS, ...FOOD, ...MEDICAL],
		imports: IMPORTS
	},
	rules: [
		{
			type: 'imports',
			hit: 'imports',
			miss: 'noTax'
		},
		{
			type: 'exemptions',
			hit: 'noTax',
			miss: 'basic' 
		}
	]
}

module.exports = config;