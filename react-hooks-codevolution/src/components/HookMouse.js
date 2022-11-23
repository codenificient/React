import React, { useEffect, useState } from 'react';

function HookMouse() {
	const [ x, setX ] = useState(0);
	const [ y, setY ] = useState(0);

	const logMousePosition = (e) => {
		console.log('Log mouse position');
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('useeffect function called');
		window.addEventListener('mousemove', logMousePosition);

		return () => {
			console.log('component unmount called');
			window.removeEventListener('mousemove', logMousePosition);
		};
	}, []);

	return (
		<div>
			<h2>
				HOOKS | X - {x} Y - {y}
			</h2>
		</div>
	);
}

export default HookMouse;
