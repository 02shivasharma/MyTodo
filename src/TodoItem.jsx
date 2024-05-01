import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
    const {id} = todo;
    const deleteHandler = ()=>{
          onDelete(id);
    }
  return (
    <div className='container bg-violet-100 min-h-[80h]'>
      <span>{todo.text}</span>
      <button onClick={deleteHandler} className="bg-violet-900 text-white cursor-pointer mx-20 rounded-sm">Delete</button>
    </div>

  );
};

export default TodoItem;
