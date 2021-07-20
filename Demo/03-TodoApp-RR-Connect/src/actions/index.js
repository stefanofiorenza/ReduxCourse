let nextTodoId = 0 //initialize counter for todoId


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text:text
  };
} 

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter:filter
  }; 
}

export const toggleTodo = (id) => { 
  return {
    type: 'TOGGLE_TODO',
    id:id
  } 
}



/* more concise syntax since ES6 */

/*
export const addTodo = text => ({ //round brackets wrap result returned (in this case an object {}) same as return { type: 'ADD_TODO', ...}
  type: 'ADD_TODO',
  id: nextTodoId++,
  text // same as text:text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})



*/