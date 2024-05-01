import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Navbar from './componenbs/Navbar';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div>
        <span className="bg-yellow-600">Your's Todo</span>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
