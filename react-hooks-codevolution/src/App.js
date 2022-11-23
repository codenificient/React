import React from 'react';
import './App.css';
import CounterFive from './components/CounterFive';
import CounterFour from './components/CounterFour';
import UserForm from './components/UserForm';

export const CountContext = React.createContext();

/* user and channel contexts
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
*/
/* 

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		// default:
		//     return state
	}
	return state;
};
*/
function App() {
	// const [ count, dispatch ] = useReducer(reducer, initialState);

	return (
		// <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
		<div className="App">

			<UserForm />
			{/* <CounterFour /> */}
			{/* <CounterFive /> */}
			{/* <DocTitleOne /> */}
			{/* <HookTimer /> */}
			{/* <ClassTimer /> */}
			{/* <FocusInput /> */}
			{/* <Counter /> */}
			{/* <ParentComponent /> */}
			{/* <DataFetchingTwo /> */}
			{/* <DataFetchingOne /> */}
			{/* <h2>Count - {count}</h2>
				<ComponentA />
				<ComponentB />
			<ComponentC1 /> */}

			{/* <CounterThree /> */}
			{/* <CounterTwo /> */}
			{/* <CounterOne /> */}
			{/* <UserContext.Provider value="ComputerSmart">
				<ChannelContext.Provider value="CodenificenT">
					<ComponentC />
				</ChannelContext.Provider>
				</UserContext.Provider> */}
			{/* <DataFetching /> */}
			{/* <IntervalHookCounter /> */}
			{/* <IntervalClassCounter /> */}
			{/* <MouseContainer /> */}
			{/* <HookMouse /> */}
			{/* <ClassMouse /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterFour /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounterTwo /> */}
			{/* <HookCounter /> */}
			{/* <ClassCounter /> */}
		</div>
		// </CountContext.Provider>
	);
}

export default App;
