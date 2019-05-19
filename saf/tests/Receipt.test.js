const Receipt = require('./../src/Receipt.js');
const config = require('./../src/constants.js');


test('Receipt prints out expected output', () => {
 	const spyLog = jest.spyOn( console, 'log' ); 
	const receipt = new Receipt(config, 'input1.txt')
	receipt.printReceipt()
	expect(spyLog).toHaveBeenCalled();
})
