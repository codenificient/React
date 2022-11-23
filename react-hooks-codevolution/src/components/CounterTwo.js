import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value}
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value}
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value}
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value}
        case 'reset':
            return initialState
        // default:
        //     return state
    }
    return state
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div><h2>First Counter - {count.firstCount}</h2></div>
            <div><h2>Second Counter - {count.secondCount}</h2></div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            
            <button onClick={() => dispatch({type: 'decrement', value:1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value:1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value:5})}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            
            <button onClick={() => dispatch({type: 'decrement2', value:5})}>Counter 2 Minus 5</button>
            <button onClick={() => dispatch({type: 'increment2', value:5})}>Counter 2 Plus 5</button>
        </div>
    )
}

export default CounterTwo
