import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../commons/Constants.js'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const VisibleTodoList = () =>{

 
  //filter state with selector function
  const todos = useSelector(state =>{
    return getVisibleTodos(state.todos, state.visibilityFilter);
  })

  //get dispatcher and dispatch actions
  const dispatch = useDispatch();
  const toggleTodoLocal= (id) => {
    dispatch(toggleTodo(id));
  }

  return <TodoList toggleTodo={toggleTodoLocal} todos={todos} />
}

export default VisibleTodoList;
