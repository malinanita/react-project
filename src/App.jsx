import styles from './App.module.css'
import React, { useState, useEffect } from 'react';
import AddTodoForm from './components/AddToDoForm/AddToDoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  // Empty list
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new to-do
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
      setTodos([...todos, newTodo]);
      setShowAddForm(false); // Hides form after add
  };

  const [showAddForm, setShowAddForm] = useState(false);

  // Toggle completed/not completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-En", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today's to-dos</h1>
      <p className={styles.date}>{formattedDate}</p>

      {todos.length === 0 ? (
        <p className={styles.emptyState}>No tasks yet – add your first one!</p>
        ) : (
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
        />
      )}

      <button 
        className={styles.addButton} 
        onClick={() => setShowAddForm(prev => !prev)}>
        +
      </button>
      {showAddForm && <AddTodoForm addTodo={addTodo} />}
      
    </div>
  );
}

export default App;
