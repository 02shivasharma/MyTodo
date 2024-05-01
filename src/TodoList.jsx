import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      console.log(todos)
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
          <input
        className='w-1/2'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button className='bg-slate-600 text-white rounded-md' onClick={handleAddTodo}>Add</button>
      <ol className='py-2'>
        {todos.map((todo) => (
          <li className='py-1' key={todo.id}>
            <TodoItem todo={todo} onDelete={handleDeleteTodo} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
