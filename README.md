# shufflefy
A Node.js package to shuffle an array.

## Usage

Install the package using npm:

    npm install shufflefy --save

Require the package:

	const shufflefy = require('shufflefy');

Feed it with an array:

	const numberArr=[1,2,3,4,5,6,7];
	console.log(shufflefy(numberArr));

Arguments:

+ inputArr - input array

+ iteration - the times you would want the input array to be shuffled

+ starting_seed - to generate pseudorandom number, same starting_seed and iteration combination always generates same result

+ randomnizer - customized randomizer - function that returns number in range [0,1]

And check out example.js

## License

MIT