import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice'

export const TodoItem = ({ name, done, id}) => {
    const dispatch = useDispatch();
    const handleCheck= () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">
            <Checkbox
            checked={done}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}
