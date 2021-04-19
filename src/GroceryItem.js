import React, { useContext } from 'react'
import { GroceryItemContext } from './context'

function GroceryItem() {
    const {
        groceryItem: {id, grocery, isComplete },
        deleteGrocery,
        doneGrocery, 
    } = useContext(GroceryItemContext)

    function handleDeleteOnClick(id) {
        deleteGrocery(id);
    }

    function handleDoneOnClick(id) {
        doneGrocery(id)
    }

    return (
        <div>
            {isComplete ? <span style={{textDecoration:"line-through"}}>{grocery}</span> : grocery}
            <button onClick={() => handleDoneOnClick(id)}>Done</button>
            <button onClick={() => handleDeleteOnClick(id)}>Delete</button>
        </div>
    )
}

export default GroceryItem;