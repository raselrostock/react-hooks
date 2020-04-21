import React, { useState } from 'react';

const Item = ( { todo, index, handleEditItem, handleRemoveItem }) => {
	return (
			<div className="todo">
				<span 
					className={ todo.isCompleted ? 'strike-through' : '' }
					onClick= { () => handleEditItem( index ) }
					>
					{ todo.text }
				</span>
				<span className="remove-item-cross" onClick={ ()=> handleRemoveItem(index)} >X</span>
			</div>
		);
}

export default Item;