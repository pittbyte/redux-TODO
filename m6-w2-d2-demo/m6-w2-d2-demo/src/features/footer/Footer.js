import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStatusFilter,
  toggleColorFilter,
  markAllCompleted,
  clearCompleted,
} from '../todos/todosSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  const handleStatusFilterChange = (status) => {
    dispatch(setStatusFilter(status));
  };

  const handleColorFilterChange = (color) => {
    dispatch(toggleColorFilter(color));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <footer className="footer">
      <span>{activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left</span>
      <div>
        <button onClick={() => handleStatusFilterChange('All')}>All</button>
        <button onClick={() => handleStatusFilterChange('Active')}>Active</button>
        <button onClick={() => handleStatusFilterChange('Completed')}>Completed</button>
      </div>
      <div>
        <button onClick={() => handleColorFilterChange('Green')}>Green</button>
        <button onClick={() => handleColorFilterChange('Blue')}>Blue</button>
        <button onClick={() => handleColorFilterChange('Orange')}>Orange</button>
        <button onClick={() => handleColorFilterChange('Purple')}>Purple</button>
        <button onClick={() => handleColorFilterChange('Red')}>Red</button>
      </div>
      <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </footer>
  );
};

export default Footer;