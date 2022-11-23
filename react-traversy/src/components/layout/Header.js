import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>ToDo List </h1>
			<Link style={linkStyle} to="/">
				Home
			</Link>{' '}
			|{' '}
			<Link style={linkStyle} to="/about">
				About
			</Link>
		</header>
	);
}

const headerStyle = {
	background: '#333',
	color: 'salmon',
	textAlign: 'center',
	padding: '10px',
	fontFamily: 'Poppins'
};

const linkStyle = {
	color: 'aqua',
	textDecoration: 'none',
	fontFamily: 'Acme'
};

export default Header;
