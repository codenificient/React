import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	increment() {
		// CHANGING THE STATE DIRECTLY DOES NOT WORK DUE TO SYNC ASYNC
		// this.state.count = this.state.count + 1;
		// console.log(this.state.count);

		// THIS DOES NOT WORK WHEN BATCHING THE REQUEST BECUASE DOES
		// TRACK THE PREVIOUS STATE
		// this.setState(
		// 	{
		// 		count: this.state.count + 1
		// 	},
		// 	() => console.log('Callback value: ', this.state.count)
		// );
		// console.log(this.state.count);

		this.setState((prevState) => ({
			count: prevState.count + 1
		}));
		console.log(this.state.count);
	}

	incrementFive() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}

	render() {
		return (
			<div>
				<div>count - {this.state.count}</div>
				<button onClick={() => this.incrementFive()}>Increment</button>
			</div>
		);
	}
}
