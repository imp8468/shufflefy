# shufflefy
A Node.js package to shuffle an array. 

## Usage

Install the package using npm:

    npm install shufflefy

Require the package:

	const shufflefy = require('shufflefy');

Feed it with an array:

	const numberArr=[1,2,3,4,5,6,7];
	console.log(shufflefy(numberArr));

Arguments list:

	shufflefy(inputArr, iteration, starting_seed, randomizer)

+ inputArr - input array

+ iteration - shufflefy can iterate over the output array

+ starting_seed - same starting_seed and iteration combination would always generate the same result

+ randomizer - a function that takes in a seed(or not as you wish) and returns a number between 0 (inclusive) and 1 (exclusive)

Check example:

	node example

Run benchmarking:

	node benchmark

## License

MIT