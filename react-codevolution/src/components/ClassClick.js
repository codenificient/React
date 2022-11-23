import React, { Component } from 'react';

export default class ClassClick extends Component {
	clickHandler = () => {
		console.log('Class button clicked');
	};

	render() {
		return (
			<div>
				<button className="button" onClick={this.clickHandler}>
					Click Me
				</button>
			</div>
		);
	}
}
