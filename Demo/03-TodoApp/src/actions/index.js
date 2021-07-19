let nextTodoId = 0




export const addTodo = text => {

  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text:text
  };

} 

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter:filter
  }; 
}

export const toggleTodo = id => {
 
  return {
    type: 'TOGGLE_TODO',
    id:id
  } 
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})



*/