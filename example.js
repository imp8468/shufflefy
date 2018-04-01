const shufflefy = require('./index');
const numberArr=[1,2,3,4,5,6,7];
const stringArr=["1","2","3","4","5","6","7"];
const objectArr=[{1:1},{2:2},{3:3},{4:4},{5:5},{6:6},{7:7}];
const mixedArr=[1,NaN,undefined,null,"5",{key1:"value",key2:function a(){console.log("invoked")}},true];

console.log("\nshuffle array of different of types");
console.log(shufflefy(numberArr));
console.log(shufflefy(stringArr));
console.log(shufflefy(objectArr));
console.log(shufflefy(mixedArr));

console.log("\nshuffle 10 times");
console.log(shufflefy(numberArr, 10));

console.log("\nshuffle 10 times, starting seed 20. Result always: [ 1, 3, 7, 5, 4, 6, 2 ]");
console.log(shufflefy(numberArr, 10, 20));

console.log("\nshuffle 10 times, starting seed irrelevant, customized randomizer ");
const customizedRandomizer = (seed) => { 
	const factor1 = Math.random();
	const factor2 = Math.random();
	return Math.round(factor1/factor2);
}
console.log(shufflefy(numberArr, 10, null, customizedRandomizer));