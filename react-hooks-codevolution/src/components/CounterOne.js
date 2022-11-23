import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        // default:
        //     return state
    }
    return state
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div><h2>Count - {count}</h2></div>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
        </div>
    )
}

export default CounterOne
