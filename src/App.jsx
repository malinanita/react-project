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
  };

  // Toggle completed/not completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>My To-do App</h1>
        <AddTodoForm addTodo={addTodo} />
        {todos.length === 0 ? (
            <p className={styles.emptyState}>No tasks yet – add your first one!</p>
        ) : (
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default App;
