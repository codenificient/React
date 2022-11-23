import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../App';

function ComponentC() {

    // const user = useContext(UserContext)
    // const channel = useContext(ChannelContext)

	return (
		<div>
            <h1>Component C</h1>
            <h3>
                {/* {user} - {channel} */}
            </h3>
		</div>
	);
}

export default ComponentC;
