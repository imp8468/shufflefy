const shufflefy = require('./index');
const crypto = require('crypto');

const numberArr = [1, 2, 3, 4, 5, 6, 7];
const stringArr = ["1", "2", "3", "4", "5", "6", "7"];
const objectArr = [{1: 1}, {2: 2}, {3: 3}, {4: 4}, {5: 5}, {6: 6}, {7: 7}];
const mixedArr = [1, NaN, undefined, null, "5" ,{key1: "value", key2: function a(){console.log("invoked");}}, true];

console.log("\nshuffle array of different of types");
console.log(shufflefy(numberArr));
console.log(shufflefy(stringArr));
console.log(shufflefy(objectArr));
console.log(shufflefy(mixedArr));

console.log("\nshuffle 10 times");
console.log(shufflefy(numberArr, 10));

console.log("\nshuffle 10 times, starting_seed 20. Result always: [5, 2, 6, 7, 1, 3, 4]");
console.log(shufflefy(numberArr, 10, 20));

console.log("\nshuffle 10 times, starting_seed irrelevant, customized randomizer");
const customizedRandomizer = () => {
	const factor1 = crypto.randomBytes(4).toString('hex');
	const factor2 = crypto.randomBytes(4).toString('hex');
	const rnd = parseInt(factor1, 16) / parseInt(factor2, 16);
	if(rnd < 1)
	{
		return rnd;
	}
	else{
		return 1 / rnd;
	}
}
console.log(shufflefy(numberArr, 10, null, customizedRandomizer));