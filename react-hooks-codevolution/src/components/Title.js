import React from 'react';

function Title() {
	console.log('Rendering title');
	return (
		<div>
			<h2>use Callback Hook</h2>
		</div>
	);
}

export default React.memo(Title);
