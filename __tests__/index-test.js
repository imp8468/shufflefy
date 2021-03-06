jest.dontMock("../index.js");
const inputArr = [1, 2, 3, 4, 5, 6, 7]

describe("Input should be array", () => {
	it("If input is not array then throw", () => {
		const shufflefy = require("../index.js");
		expect(() => shufflefy("string")).toThrow();
	})
});

describe("Input should be array", () => {
	it("If input is empty array then return empty array", () => {
		const shufflefy = require("../index.js");
		const output = shufflefy([]);
		expect(output).toEqual([]);
	})
});

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
	it("iteration=default, starting_seed=10 should output [7, 2, 6, 4, 3, 1, 5]", () => {
		const shufflefy = require("../index.js");
		const iteration = undefined;
		const starting_seed = 10;
		const expectedOutput = [7, 2, 6, 4, 3, 1, 5];
		const output = shufflefy(inputArr, iteration, starting_seed);
		expect(output).toEqual(expectedOutput);
	})
});

describe("Same starting_seed and iteration combination guarantees the same output", () => {
	it("iteration=10, starting_seed=20 should output [5, 2, 6, 7, 1, 3, 4]", () => {
		const shufflefy = require("../index.js");
		const iteration = 10;
		const starting_seed = 20;
		const expectedOutput = [5, 2, 6, 7, 1, 3, 4];
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