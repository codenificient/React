import React from 'react';
import useCounter from '../Hooks/useCounter';

function CounterFive() {
	const [ count, increment, decrement, reset ] = useCounter();
	return (
		<div>
			<h2>Count = {count}</h2>
			<button onClick={reset}>Reset</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default CounterFive;
