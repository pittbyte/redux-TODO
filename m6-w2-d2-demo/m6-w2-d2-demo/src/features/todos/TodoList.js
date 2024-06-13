import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filters = useSelector((state) => state.todos.filters);

  const filteredTodos = todos.filter((todo) => {
    if (filters.status === 'Active' && todo.completed) return false;
    if (filters.status === 'Completed' && !todo.completed) return false;
    if (filters.colors.length > 0 && !filters.colors.includes(todo.color)) return false;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;