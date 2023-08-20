import React, { useReducer, useState } from 'react'
import "./Counter.css"

const Counter = () => {

  const getInput = (state, action)=>{
    if(action.type === "EMAIL"){
      return {
        ...state,
        email: action.value,
        isValidEmail: action.value.includes("@")
      }
    }
    if(action.type === "PASSWORD"){
      return{
        ...state,
        password: action.value,
        isValidPassword: action.value.length > 5
      }
    }
  }

  const[input, dispatchInput] = useReducer(getInput,{
    email: "",
    isValidEmail: null,
    password: "",
    isValidPassword: null,
  },)

    const emailHandler = (e)=>{
      dispatchInput({value: e.target.value, type: "EMAIL"})
      
    }
    
    const passwordHandler = (e)=>{
        dispatchInput({value: e.target.value, type: "PASSWORD"})
    }

  return (
    <div className='counter'>
        <input style={{border: input.isValidEmail === false ? "2px solid red": "2px solid green"}} onChange={emailHandler} type='text'/>
        <input style={{border: input.isValidPassword === false ? "2px solid red": "2px solid green"}} onChange={passwordHandler} type='password'/>
        <button>ADD</button>

    </div>
  )
}

export default Counter