import React, { useState } from 'react'
import { GroceryItemContext, GroceryInputContext } from './context/context'
import { v4 as uuidv4 } from 'uuid'
import GroceryInput from './GroceryInput'   
import GroceryItem from './GroceryItem'

let groceryObj = [
  {
    id: uuidv4(),
    grocery: "milk",
    isCompleted: false
  },
  {
    id: uuidv4(),
    grocery: "coffee",
    isCompleted: false
  },
]

function App() {
  const [groceryArray, setGroceryArray] = useState(groceryObj)

  function addGrocery(grocery) {
    let newAddedGroceryArray = [
      ...grocery,
      {
        id: uuidv4(),
        grocery: grocery,
        isCompleted: false,
      }
    ]
    setGroceryArray(newAddedGroceryArray)
  }

  function deleteGrocery(id) {
    let newDeletedGroceryArray = groceryArray.filter((item)=>{
      if(item.id !== id) {
        return item
      }
    })
    setGroceryArray(newDeletedGroceryArray)
  }

  function doneGrocery(id) {
    let newDoneGroceryArray = groceryArray.map((item) => {
      if(item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    setGroceryArray(newDoneGroceryArray)
  }


  return (
    <div className="App">
      <GroceryInputContext.Provider value={{addGrocery}}>
        <GroceryInput />
      </GroceryInputContext.Provider>
      <GroceryItemContext.Provider value={{groceryItem: item, deleteGrocery, doneGrocery}}>
        <GroceryItem />
      </GroceryItemContext.Provider>
    </div>
  );
}

export default App;
