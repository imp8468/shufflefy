function shufflefy(inputArr, iteration, starting_seed, randomnizer){
	const SHUFFLEFY_DEFALT_ITERATION = 1;
	const SHUFFLEFY_DEFALT_RANDOMIZER = () => {
		if(typeof(seed) !== "number" || !seed)
		{
			seed = new Date().getTime();
		}
		seed = (seed * 9301 + 49297) % 233280;
		var rnd = seed / 233280;

		return rnd;
	};

	if(!(inputArr instanceof Array))
	{
		throw "Expecting Array, getting " + typeof(inputArr);
	}

	let	outputArr;
	let seed = starting_seed;

	if(typeof(iteration) !== "number" || !iteration)
	{
		iteration = SHUFFLEFY_DEFALT_ITERATION;
	}

	if(typeof(randomnizer) !== "function" || typeof(randomnizer()) !== "number")
	{
		randomnizer = SHUFFLEFY_DEFALT_RANDOMIZER;
	}


	for(let i = 0; i < iteration; i++)
	{	
		outputArr=[];
		inputArr.forEach((obj) => {
			outputArr.splice(Math.round(randomnizer() * outputArr.length), 0, obj);
		});
		inputArr = outputArr;
	}

	return outputArr;
}

module.exports = shufflefy;