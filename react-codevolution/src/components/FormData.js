import React, { Component } from 'react';

export default class FormData extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			comments: '',
			topic: 'react'
		};
	}

	handleUserName = (e) => {
		this.setState({
			username: e.target.value
		});
	};

	handleComments = (e) => {
		this.setState({
			comments: e.target.value
		});
	};

	handleTopic = (e) => {
		this.setState({
			topic: e.target.value
		});
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
	};

	render() {
		const { username, comments, topic } = this.state;
		return (
			<form onSubmit={this.onSubmitForm}>
				<div>
					<label>Username</label>
					<input type="text" value={username} onChange={this.handleUserName} />
				</div>

				<div>
					<label>Comments</label>
					<textarea type="text" value={comments} onChange={this.handleComments} />
				</div>

				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopic}>
						<option value="react">React</option>
						<option value="vue">Vue</option>
						<option value="angular">Angular</option>
						<option value="dotnet">DotNet</option>
					</select>
				</div>

				<button type="submit">Submit</button>
			</form>
		);
	}
}
