function shufflefy(inputArr, iteration, starting_seed, randomizer){
	if(!(inputArr instanceof Array))
	{
		throw "Expecting Array, getting " + typeof(inputArr);
	}

	const _SHUFFLEFY_DEFALT_ITERATION = 1;
	const _SHUFFLEFY_DEFALT_RANDOMIZER = (seed) => {
		if(typeof(seed) !== "number" || !seed)
		{
			let hrTime = process.hrtime();
			seed = hrTime[1];
		}
		_shufflefy_seed = (seed * 9301 + 49297) % 233280;
		return _shufflefy_seed / 233280;
	};

	if(typeof iteration !== "number" || !iteration)
	{
		iteration = _SHUFFLEFY_DEFALT_ITERATION;
	}

	if(typeof randomizer !== "function" || typeof randomizer()  !== "number")
	{
		randomizer = _SHUFFLEFY_DEFALT_RANDOMIZER;
	}

	const _shufflefy_input_len = inputArr.length;
  let _shufflefy_seed = starting_seed;
	let	_shufflefy_output_arr;

	for(let i = 0; i < iteration; i++)
	{	
		_shufflefy_output_arr = [];

		for(let j = 0; j < _shufflefy_input_len; j++)
		{		
			_shufflefy_output_arr.splice(~~(randomizer(_shufflefy_seed) * (j + 1)), 0, inputArr[j]);
		}

		inputArr = _shufflefy_output_arr;
	}

	return _shufflefy_output_arr;
}

module.exports = shufflefy;