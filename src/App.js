import React from 'react';

import './Style.css';
// import Home from './components/Home';
import Todo from './components/Todo';
class App extends React.Component {
	render() {
		return (
			<div>
				<Todo />
			</div>
		);
	}
}

export default App;