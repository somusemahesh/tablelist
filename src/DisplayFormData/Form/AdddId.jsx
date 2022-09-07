import React from 'react'
import Form from './Form'
const AdddId = (props) => {
    const onSaveItemDataHandler = (enteredItemData)=>{

        const itemData={
          ...enteredItemData,
          id:Math.random().toString()
    
        }
    
        console.log("FROM NewGoal",itemData)
        props.onAddItem(itemData)
    
      }
  return (
    <div>
        <Form onSaveData={onSaveItemDataHandler}/>
    </div>
  )
}

export default AdddId