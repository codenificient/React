import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Legendo'
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Christiano El Guapo Sexinini de las Montanas'
				// name: 'Legendo'
			});
		}, 2000);
	}

	render() {
		console.log('******************** Parent Component render ************************');
		return (
			<div>
				<h1>Parent Component</h1>
				<h2>Current Name: {this.state.name}</h2>
				<MemoComp name={this.state.name} />
				{/* <RegComp name={this.state.name} /> */}
				{/* <PureComp name={this.state.name} /> */}
			</div>
		);
	}
}

export default ParentComp;
