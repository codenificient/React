import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
	render() {
		return <ComponentF />;
	}
}

ComponentE.contextType = UserContext;

export default ComponentE;
