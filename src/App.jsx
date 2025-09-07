import styles from './App.module.css'
import React, { useState } from 'react';
import AddTodoForm from './components/AddToDoForm/AddToDoForm';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'First todo', completed: false },
    { id: 2, text: 'Second todo', completed: false }
  ]);

  // Adding new to-do
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo]);
  };

  // Toggle completed/not completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
