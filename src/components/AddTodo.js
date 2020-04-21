import React, { useState } from 'react';

const AddTodo = ( {addTodo} ) => {
	
	const [ value, setValue ] = useState('');

	const handleSubmit = ( ) =>{
		event.preventDefault();
		if( ! value ) return ;
		addTodo(value);
		setValue('');
	}
	const handleChange = ( event ) =>{
		return setValue( event.target.value );
	}
	return (
				<form onSubmit={ handleSubmit }>
					<label className="form-label">
							Add Task:
							<input 
								onChange={ handleChange } 
								type="text" 
								value={ value } 
								placeholder="Enter new task" 
								className="form-input" 
							/>
					</label>
				</form>
		);
}

export default AddTodo;