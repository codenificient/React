import React from 'react';

export default function Welcome(props) {
	const { name, heroName } = props;
	return (
		<div>
			<h1>
				Welcome {name} a.k.a {heroName}
			</h1>
		</div>
	);
}
