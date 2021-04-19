import React, { useState, useContext } from 'react'
import { GroceryInputContext } from './context/context'

const GroceryInput = () => {
    const { addGrocery } = useContext(GroceryInputContext);
    const [grocery, setGrocery] = useState("")

    function handleGrocerySubmit(event) {
        event.preventDefault();
        addGrocery(grocery);
    }

    return (
        <form onSubmit={handleGrocerySubmit}>
            <p>Grocery List</p>
            <input
                type="text"
                value={grocery}
                onChange={(e)=>setGrocery(e.target.value)}
            />
        </form>
    )
}

export default GroceryInput;