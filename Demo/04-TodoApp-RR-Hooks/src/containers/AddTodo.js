import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = () => {
  let [inputValue, setInput] = useState('')

  const dispatch = useDispatch();

  const onSubmit= e => {
    e.preventDefault()
    if (!inputValue.trim()) {
      return
    }
    dispatch(addTodo(inputValue));    
  }

  const onTextChange =e => {
    e.preventDefault()
    setInput(e.target.value);    
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={onTextChange} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo 
