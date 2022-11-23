import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
	render() {
		console.log('Pure Component render');
		return (
			<div>
				<h1>Pure Component</h1>
				<h2>Current Name: {this.props.name}</h2>
			</div>
		);
	}
}

export default PureComp;
