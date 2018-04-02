function shufflefy(inputArr, iteration, starting_seed, randomizer){
	const SHUFFLEFY_DEFALT_ITERATION = 1;
	const SHUFFLEFY_DEFALT_RANDOMIZER = (seed) => {
		if(typeof(seed) !== "number" || !seed)
		{
			seed = Date.now();
		}
		_shufflefy_seed = (seed * 9301 + 49297) % 233280;
		return _shufflefy_seed / 233280;
	};

	if(!(inputArr instanceof Array))
	{
		throw "Expecting Array, getting " + typeof(inputArr);
	}

	if(typeof(iteration) !== "number" || !iteration)
	{
		iteration = SHUFFLEFY_DEFALT_ITERATION;
	}

	if(typeof(randomizer) !== "function" || typeof(randomizer()) !== "number")
	{
		randomizer = SHUFFLEFY_DEFALT_RANDOMIZER;
	}

  let _shufflefy_seed = starting_seed;
	let	_shufflefy_outputArr;

	for(let i = 0; i < iteration; i++)
	{	
		_shufflefy_outputArr = [];
		inputArr.forEach((obj) => {
			_shufflefy_outputArr.splice(Math.floor(randomizer(_shufflefy_seed) * (_shufflefy_outputArr.length + 1)), 0, obj);
		});
		inputArr = _shufflefy_outputArr;
	}

	return _shufflefy_outputArr;
}

module.exports = shufflefy;