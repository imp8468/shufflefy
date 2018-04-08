const shufflefy = require('./index');
const inputArr = [1,2,3];

const sample = 1000000;
const startTime = Date.now();
let dict = {};

for(let i = 0; i < sample; i++){
	let result = shufflefy(inputArr);
	if(result.toString() in dict)
	{
		dict[result.toString()] += 1;
	}else
	{
		dict[result.toString()] = 1;
	}
}
const elapsed = Date.now() - startTime;

const arrUtil = {	
	sum: function(array) {
		let num = 0;
		for (let i = 0, l = array.length; i < l; i++) num += array[i];
			return num;
	},
	
	mean: function(array) {
		return arrUtil.sum(array) / array.length;
	},
	
	variance: function(array) {
		let mean = arrUtil.mean(array);
		return arrUtil.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	},
	
	standardDeviation: function(array) {
		return Math.sqrt(arrUtil.variance(array));
	},
};

let stsArr = [];

for (let key in dict) {
	stsArr.push(dict[key]/sample*100);
	console.log(key +": "+ dict[key] +"; "+ (dict[key]/sample*100).toString()+"%");
}

console.log("Samples:\t\t"+sample);
console.log("Mean:\t\t\t"+arrUtil.mean(stsArr)+"%");
console.log("Variance:\t\t"+arrUtil.variance(stsArr));
console.log("Standard Deviation:\t"+arrUtil.standardDeviation(stsArr));
console.log("Time elapsed:\t\t"+elapsed+"ms")