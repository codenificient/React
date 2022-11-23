import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
	loading: true,
	error: '',
	post: {}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			};

		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong'
			};

		default:
			return state;
	}
};

function DataFetchingTwo() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
    const [count, setCount] = useState(0)

	const random = Math.floor(Math.random() * 100 + 1);

	const baseURL = `https://jsonplaceholder.typicode.com/posts/${random}`;
	console.log(baseURL);

        const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

	useEffect(() => {
		axios
			.get(baseURL)
			.then((response) => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: 'FETCH_ERROR' });
			});
	}, [count]);

	return (
		<div>
			{state.loading ? 'Loading' : <h2>{state.post.title}</h2>}
			{state.error ? state.error : null}
		</div>
	);
}

export default DataFetchingTwo;
