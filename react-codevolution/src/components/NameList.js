import React from 'react';
import Person from './Person';

function NameList() {
	const names = [ 'Bruce', 'Celia', 'Boukare', 'Leila', 'Maimouna' ];

	const persons = [
		{
			id: 3,
			name: 'Diana',
			skill: 'Vue',
			age: 56
		},
		{
			id: 0,
			name: 'Brian',
			skill: 'Django',
			age: 27
		},
		{
			id: 2,
			name: 'Denise',
			skill: 'Machine Learning',
			age: 90
		},
		{
			id: 1,
			name: 'Josh',
			skill: 'Ionic',
			age: 40
		}
	];

	const personList = persons.map((person) => <Person key={person.id} person={person} />);
	return (
		<div>
			{/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2> */}

			{names.map((name, index) => <h2 key={index}>{name}</h2>)}

			{'------------------------------------------------------------------------------'}
			{personList}
		</div>
	);
}

export default NameList;
