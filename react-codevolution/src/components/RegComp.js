import React, { Component } from 'react';

class RegComp extends Component {
	render() {
		console.log('Regular Component render');
		return (
			<div>
				<h1>Regular Component</h1>
				<h2>Current Name: {this.props.name}</h2>
			</div>
		);
	}
}

export default RegComp;
