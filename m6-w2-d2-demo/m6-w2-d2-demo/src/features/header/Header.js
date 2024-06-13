import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setInputText } from '../todos/todosSlice';

const Header = () => {
  const dispatch = useDispatch();
  const inputText = useSelector((state) => state.todos.inputText);

  const handleChange = (e) => {
    dispatch(setInputText(e.target.value));
  };

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      dispatch(setInputText(''));
    }
  };

  return (
    <header className="header">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </header>
  );
};

export default Header;