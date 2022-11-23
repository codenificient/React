import React, { Component } from 'react';

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false
		};
	}

	render() {
		{
			/* STRAIGHTFORWARD METHOD */
		}
		// if (this.state.isLoggedIn) {
		// 	return <div>Welcome Boss</div>;
		// } else {
		// 	return <div>Welcome Guest</div>;
		// }

		{
			/* VARIABLE ELEMENT METHOD */
		}
		// let message;
		// if (this.state.isLoggedIn) {
		// 	message = <div>Welcome Boss</div>;
		// } else {
		// 	message = <div>Welcome Guest</div>;
		// }

		// return <div>{message}</div>

		{
			/* TERNARY OPERATOR METHOD */
		}
		// return this.state.isLoggedIn ? <div>Welcome Boss!!</div> : <div>Welcome Guest!!</div>;

		{
			/* SHORTCIRCUIT METHOD */
		}

		return this.state.isLoggedIn && <div>Welcome Boss!!</div>;
	}
}

export default UserGreeting;
