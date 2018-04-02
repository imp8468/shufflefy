jest.dontMock("../index.js");
const inputArr = [1, 2, 3, 4, 5, 6, 7]

describe("Output should have the same size to input", () => {
	it("Should be equal in length", () => {
		const shufflefy = require("../index.js");
		const output = shufflefy(inputArr);
		expect(output.length).toEqual(inputArr.length);
	})
});

describe("Should be able to run with any type or value of starting_seed and iteration", () => {
	it("iteration=undefined, starting_seed omitted", () => {
		const shufflefy = require("../index.js");
		expect(() => shufflefy(inputArr, undefined)).not.toThrow();
	})
});

describe("Should be able to run with any type or value of starting_seed and iteration", () => {
	it("iteration=null, starting_seed=NaN", () => {
		const shufflefy = require("../index.js");
		expect(() => shufflefy(inputArr, null, NaN)).not.toThrow();
	})
});

describe("Should be able to run with any type or value of starting_seed and iteration", () => {
	it("iteration='string', starting_seed='string'", () => {
		const shufflefy = require("../index.js");
		expect(() => shufflefy(inputArr, 'string', 'string')).not.toThrow();
	})
});

describe("Same starting_seed and iteration combination guarantees the same output", () => {
	it("iteration=default, starting_seed=10 should output [2, 5, 3, 1, 7, 6, 4]", () => {
		const shufflefy = require("../index.js");
		const iteration = undefined;
		const starting_seed = 10;
		const expectedOutput = [2, 5, 3, 1, 7, 6, 4];
		const output = shufflefy(inputArr, iteration, starting_seed);
		expect(output).toEqual(expectedOutput);
	})
});

describe("Same starting_seed and iteration combination guarantees the same output", () => {
	it("iteration=10, starting_seed=20 should be [1, 3, 7, 5, 4, 6, 2]", () => {
		const shufflefy = require("../index.js");
		const iteration = 10;
		const starting_seed = 20;
		const expectedOutput = [1, 3, 7, 5, 4, 6, 2];
		const output = shufflefy(inputArr, iteration, starting_seed);
		expect(output).toEqual(expectedOutput);
	})
});

describe("Should be able to run with customized randomizer", () => {
	it("randomizer returns [0,1) result in an shuffled array", () => {
		const shufflefy = require("../index.js");
		const customizedRandomizer = () => Math.random();
		expect(() => shufflefy(inputArr, null, null, customizedRandomizer)).not.toThrow();
	})
});

describe("Should be able to run with customized randomizer", () => {
	it("randomizer always returns >=1 result in an array of the same order", () => {
		const shufflefy = require("../index.js");
		const randomizerReturnsEqualOrGreaterThan1 = () => Math.random()+1;
		const expectedOutput = inputArr;
		const output = shufflefy(inputArr, null, null, randomizerReturnsEqualOrGreaterThan1);
		expect(output).toEqual(expectedOutput);
	})
});

describe("Should be able to run with customized randomizer", () => {
	it("randomizer always returns 0 result in an array of the reversed order", () => {
		const shufflefy = require("../index.js");
		const randomizerReturns0 = () => (-1);
		const expectedOutput = [7, 6, 5, 4, 3, 2, 1];
		const output = shufflefy(inputArr, null, null, randomizerReturns0);
		expect(output).toEqual(expectedOutput);
	})
});