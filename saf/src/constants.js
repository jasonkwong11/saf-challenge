const BASIC_SALES_TAX = .10;
const IMPORT_TAX = .05 + BASIC_SALES_TAX; // no exemptions for import tax

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
		exemptions: 0
	},
	exemptions: [...BOOKS, ...FOOD, ...MEDICAL],
	imports: IMPORTS,
	basic: [],
	priorities: ['imports', 'exemptions', 'basic'] //lower index is higher priority
}

module.exports = config;