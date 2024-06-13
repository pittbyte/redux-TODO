import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, changeColor } from './todosSlice';
import { ReactComponent as TimesIcon } from './times-solid.svg';

const TodoItem = ({ id, text, completed, color }) => {
    const dispatch = useDispatch();
  
    const handleToggle = () => {
      dispatch(toggleTodo(id));
    };
  
    const handleDelete = () => {
      dispatch(deleteTodo(id));
    };
  
    const handleColorChange = (e) => {
      dispatch(changeColor({ id, color: e.target.value }));
    };
  
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        <span>{text}</span>
        <select value={color} onChange={handleColorChange}>
          <option value="">None</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
          <option value="Purple">Purple</option>
        </select>
        <button onClick={handleDelete}>
          <TimesIcon width="10px" height="10px" />
        </button>
      </li>
    );
  };
  
  export default TodoItem;