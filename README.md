Directions:
1. cd to the root, "saf" directory
2. Run yarn install to install jest
3. Run the application with "node src/index.js"
2. Run the unit and integration tests with "jest"

Assumptions Made:
1. Input will be a txt file with: quantity, item, 'at', price, (in that order) separated by spaces for a line item and each line item is separated by a new line.

2. In src/constants.js, the FOOD, MEDICAL, IMPORT arrays will contain a comprehensive list of all possible strings considered food, medical, and imports respectively

3. If an item is pluralized, it will contain a substring of it's singular form. 

E.g.: "chocolates" contain "chocolate", "steaks" contain "steak", "octopuses" contain "octopus".