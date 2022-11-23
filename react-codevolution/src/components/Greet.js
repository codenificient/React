import React from 'react';

export default function Greet({ name, heroName }) {
	return (
		<div>
			<h1>
				Hello {name} a.k.a {heroName}
			</h1>
		</div>
	);
}
