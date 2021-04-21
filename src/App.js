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
      ...groceryArray,
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

  function showGrocery() {
    return groceryArray.map((item) => {
      return (
        <GroceryItemContext.Provider value={{groceryItem: item, deleteGrocery, doneGrocery}}>
          <GroceryItem />
        </GroceryItemContext.Provider>
      )
    })
  }

  return (
    <div className="App" style={{textAlign:"center"}}>
      <GroceryInputContext.Provider value={{addGrocery}}>
        <GroceryInput />
      </GroceryInputContext.Provider>
      {showGrocery()}
    </div>
  );
}

export default App;