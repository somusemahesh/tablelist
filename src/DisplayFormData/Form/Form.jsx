import React, { useState } from 'react'
// import ReactDOM from "react-dom/client";
import './Form.css'
const Form = (props) => {

  const [isvalid,setIsValid]=useState(false)  
  const [userInput,updateUserInput]=useState(
    {
      inputTitle:'',
      inputAmount:'',
    
    }
  )

  const titleUpdateHandler=(event)=>{
    updateUserInput({
      ...userInput,
inputTitle:event.target.value,
    })
    if(userInput.inputTitle.trim().length>0){
      setIsValid(false)
  
    }
  }


  const amountUpdateHandler=(event)=>{
    updateUserInput({
      ...userInput,
      inputAmount:event.target.value,
    })
    if(userInput.inputAmount.trim().length>0){
      setIsValid(false)
  
    }
  }

  const submitButtonHandler=(event)=>{
    // event.preventDefault();
    // const itemData={
    //   title:userInput.inputTitle,
    //   amount:userInput.inputAmount,
    // }

    // console.log("Data in form",itemData);
    // props.onSaveData(itemData)
    if(userInput.inputTitle.trim().length===0 && userInput.inputAmount.trim().length===0){
      setIsValid(true)

      event.preventDefault();
      
    }
    else{

      event.preventDefault();
  
      const itemData={
        title:userInput.inputTitle,
        amount:userInput.inputAmount,
      }
      props.onSaveData(itemData)
       
    }
    

    updateUserInput({
      inputTitle:"",
      inputAmount:"",
    })

  }

    
   

  return (
    <>
    
    <form class="login-form" onSubmit={submitButtonHandler}>
  <h1>Welcome</h1>
  <div class="form-input-material">
  <label for="username" style={{color:isvalid ? 'red':''}}>Item Name</label><br />
    <input type="text"class="form-control-material" 
    value={userInput.inputTitle}
    onChange={titleUpdateHandler}
    />
   
  </div>
  <div class="form-input-material">
    <label for="amount" style={{color:isvalid ? 'red':'black'}}>Amount</label><br />
    <input type="text" class="form-control-material"
    value={userInput.inputAmount} onChange={amountUpdateHandler} 
    />
  </div>
  <button type="submit" class="btn btn-primary btn-ghost">Submit</button>
</form>

    </>
  )
}

export default Form