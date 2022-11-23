import React, { Component } from 'react';

class LifecycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Legendo'
		};
		console.log('Lifecycle B contructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle B derived state');
		return null;
	}

	componentDidMount() {
		console.log('Lifecycle B componentDidMount method ');
	}

	shouldComponentUpdate() {
		console.log('Lifecycle B ShouldComponentUpdate method');
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log('Lifecycle B getSnapshotBeforeUpdate method');
		return null;
	}

	componentDidUpdate() {
		console.log('Lifecycle B componentDidUpdate method');
	}

	render() {
		console.log('Lifecycle B render method');
		return <div>Lifecycle B</div>;
	}
}

export default LifecycleB;
