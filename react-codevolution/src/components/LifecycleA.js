import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Legendo'
		};
		console.log('Lifecycle A contructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle A derived state');
		return null;
	}

	componentDidMount() {
		console.log('Lifecycle A componentDidMount method ');
	}

	shouldComponentUpdate() {
		console.log('Lifecycle A ShouldComponentUpdate method');
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log('Lifecycle A getSnapshotBeforeUpdate method');
		return null;
	}

	componentDidUpdate() {
		console.log('Lifecycle A componentDidUpdate method');
	}

	changeState = () => {
		this.setState({
			name: 'CodEvolution'
		});
	};

	render() {
		console.log('Lifecycle A render method');
		return (
			<div>
				<div>Lifecycle A</div>
				<button onClick={this.changeState}>Change State</button>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
