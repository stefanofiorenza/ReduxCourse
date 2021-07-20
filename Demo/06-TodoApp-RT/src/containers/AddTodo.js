import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  
  let [inputValue, setInput] = useState('')

  const onSubmit= e => {
    e.preventDefault()
    if (!inputValue.trim()) {
      return
    }
    dispatch(addTodo(inputValue))
    
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

export default connect()(AddTodo) //connect enables here the dispatch 
