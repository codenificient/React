import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataFetching() {
	const [ post, setPost ] = useState({});
	const [ id, setId ] = useState([]);
	const [ idButton, setIdButton ] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				console.log(res);
				setPost(res.data);
			})
			.catch((err) => console.log(err));
	}, [idButton]);

    const handleFetch = () => {
        setIdButton(id)
    }

	return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type='button' onClick={handleFetch}>Fetch Post</button>
            {/* <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul> */}
            <div>{post.title}</div>
            <div><img src='https://via.placeholder.com/600/771796' alt='reprehenderit' /></div>

		</div>
	);
}

export default DataFetching;
