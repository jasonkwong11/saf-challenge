const Receipt = require('./Receipt.js')
const config = require('./constants.js');

try {
	const receipt = new Receipt(config, 'input1.txt')
	receipt.printReceipt();
} catch (err) { 
    console.log('err: ', err);
}