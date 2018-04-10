function shufflefy(input_arr, iteration, starting_seed, randomizer){
	if(!(input_arr instanceof Array))
	{
		throw "Expecting Array, getting " + typeof(input_arr);
	}

	const _SHUFFLEFY_DEFAULT_ITERATION = 1;
	const _SHUFFLEFY_DEFAULT_RANDOMIZER = (seed) => {
		if(typeof seed !== "number" || !seed)
		{
			seed = process.hrtime()[1];
		}
		_shufflefy_seed = (seed * 9301 + 49297) % 233280;
		return _shufflefy_seed / 233280;
	};

	if(typeof iteration !== "number" || !iteration)
	{
		iteration = _SHUFFLEFY_DEFAULT_ITERATION;
	}

	if(typeof randomizer !== "function" || typeof randomizer() !== "number")
	{
		randomizer = _SHUFFLEFY_DEFAULT_RANDOMIZER;
	}

	const _shufflefy_source_len = input_arr.length;
	let _shufflefy_target = input_arr.slice(0);
	let _shufflefy_seed = starting_seed;

	while(iteration)
	{	
		let _shufflefy_range = _shufflefy_source_len;
		let _shufflefy_source = _shufflefy_target;
		_shufflefy_target = new Array(_shufflefy_source_len);

		while(_shufflefy_range) {
			let _shufflefy_index = ~~(_shufflefy_range * randomizer(_shufflefy_seed));
			_shufflefy_target[--_shufflefy_range] = _shufflefy_source[_shufflefy_index];
			_shufflefy_source[_shufflefy_index] = _shufflefy_source[_shufflefy_range];
		}

		iteration--;
	}

	return _shufflefy_target;
}

module.exports = shufflefy;