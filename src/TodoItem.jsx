import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
    const {id} = todo;
    const deleteHandler = ()=>{
          onDelete(id);
    }
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={deleteHandler}>Delete</button>
    </div>

  );
};

export default TodoItem;
