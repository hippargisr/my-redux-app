import React from 'react';
import { useDispatch } from 'react-redux';

function Home() {
	const dispatch = useDispatch();

	const incrementCounter =  () => {
		dispatch({
			type: 'increment',
		});
	}

	const decrementCounter =  () => {
		dispatch({
			type: 'decrement',
		});
	}

	const incrementCounterByValue =  () => {
		dispatch({
			type: 'incrementByValue',
			payload: 25,
		});
	}

	return (
		<div>
			<button onClick={ incrementCounter }>Increament</button>
			<button onClick={ decrementCounter }>Decrement</button>
			<button onClick={ incrementCounterByValue }>Increment Counter By 25</button>
		</div>
	)
}

export default Home;