import React, { useState} from 'react';

const Home = () => {
	// const initialState = 0;
	// const [ count, setCount] = useState( initialState );
	// const handleClick = () => {
	// 	setCount(count + 1);
	// }
	const [ count, setCount] = useState( 0 );
	return (
		<div>
			<button onClick={ () => setCount(count + 1) } > Increment Count </button>
			<p> { count }</p>
		</div>
	);
}

export default Home;