import './App.css'
import React, { useState } from 'react';
import AddTodoForm from './components/AddToDoForm/AddToDoForm';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'First todo', completed: false },
    { id: 2, text: 'Second todo', completed: false }
  ]);

  return (
    <div>
      <h1>My Todo App</h1>
      
      {/* Form for future functionality */}
      <AddTodoForm />

      {/* List with to-dos */}
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
