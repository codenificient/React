import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentF() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<h2>Component F - {countContext.countState}</h2>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('increment')}>Increment</button>
		</div>
	);
}

export default ComponentF;
