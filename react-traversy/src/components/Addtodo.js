import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Addtodo extends Component {
	state = {
		title: ''
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input
					type="text"
					name="title"
					placeholder="Add Todo  ..."
					style={{ flex: '10', padding: '5px', fontFamily: 'Poppins' }}
					value={this.state.name}
					onChange={this.onChange}
				/>
				<input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
			</form>
		);
	}
}

// PropTypes
Addtodo.propTypes = {
	addTodo: ProTypes.func.isRequired
};

export default Addtodo;
