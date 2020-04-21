import React, { useState } from 'react';

import AddTodo from './AddTodo';
import Item from './Item';

const Todo = () => {
	const initialState = [
		{
			text: 'Learn Hooks',
			isCompleted: false
		},
		{
			text: 'Learn JavaScript',
			isCompleted: false
		}
	];

	const addTodo = ( value ) => {
		const newTodos = [ ...todos, { text: value } ];
		setTodos( newTodos );
	}

	const handleEditItem = ( index ) => {
		const newTodos = [ ...todos ];
		newTodos[index].isCompleted = ! newTodos[index].isCompleted;
		setTodos(newTodos)
	}

	const handleRemoveItem = ( index ) => {
		const newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos)
	}

	const [ todos, setTodos ] = useState( initialState );

	return (
			<div className="todo-container" >
				<h2 className="main-heading">Todo App </h2>
				<AddTodo addTodo={ addTodo } />
				<div className="todo-list">
					{
						todos.length ?
							(
								todos.map( ( item, index) =>(
										<Item 
											key={ `${item.text}-${index}`}
											todo= { item }
											index = { index }
											handleEditItem = { handleEditItem }
											handleRemoveItem = { handleRemoveItem }
										/>
									)
								)
							) :
							''
					}
				</div>
			</div>
		);
}

export default Todo;