import React, { useMemo, useState } from 'react';

function Counter() {
	const [ counterOne, setCounterOne ] = useState(0);
	const [ counterTwo, setCounterTwo ] = useState(0);

	const incrementOne = () => {
		setCounterOne(counterOne + 1);
	};
	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1);
    };
    
    /* useCallback caches the function itself, useMemo caches the result of the function */

	// const isEven = num => {
	// 	return num % 2 === 0;
    // };
    
	const isEven = useMemo(() => {
		return counterOne % 2 === 0;
	}, [counterOne])

	return (
		<div>
			<div>
				<button onClick={incrementOne}>Count One - {counterOne}</button>
				<span>{isEven ? '  Even' : '  Odd'}</span>
			</div>
			<div>
				<button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	);
}

export default Counter;
