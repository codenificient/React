import React from 'react';

function MemoComp({ name }) {
	console.log('Rendering Memo Component');
	return (
		<div>
			<h2>Memo Component: {name}</h2>
		</div>
	);
}

export default React.memo(MemoComp);
