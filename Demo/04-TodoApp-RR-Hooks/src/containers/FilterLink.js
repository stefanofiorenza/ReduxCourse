import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'


const FilterLink = (props) => {
  const dispatch = useDispatch();
  const onClick =() => dispatch(setVisibilityFilter(props.filter))
  const active = useSelector((state)=> {return props.filter === state.visibilityFilter});

  return (
    <Link onClick={onClick} active={active}>
      {props.children}
    </Link>)
}
export default FilterLink;
