[![Build Status](https://travis-ci.org/imp8468/shufflefy.svg?branch=master)](https://travis-ci.org/imp8468/shufflefy) [![Coverage Status](https://coveralls.io/repos/github/imp8468/shufflefy/badge.svg?branch=master)](https://coveralls.io/github/imp8468/shufflefy?branch=master) ![license](https://img.shields.io/github/license/mashape/apistatus.svg)

# shufflefy 
A Node.js package to shuffle an array. 

## Usage

Install the package using npm:

    npm install shufflefy

Require the package:

```js
const shufflefy = require('shufflefy');
```

Feed it with an array:

```js
const numberArr = [1, 2, 3, 4, 5, 6, 7];
console.log(shufflefy(numberArr));
```

Arguments list:

```js
shufflefy(input_arr[, iteration[, starting_seed[, randomizer]]])
```

+ input_arr - input array

+ iteration - number of iterations over the output array

+ starting_seed - same starting_seed and iteration combination would always generate the same result

+ randomizer - a function that takes in a seed(optional) and returns a number between 0 (inclusive) and 1 (exclusive)

Test:

    npm test

Examples:

	node example.js

Benchmarking:

	node benchmark.js

## License

MIT