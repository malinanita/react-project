import React, { useState } from "react";
import styles from './AddToDoForm.module.css'

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return; // No empty to-dos
    addTodo(text);
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        className={styles.input}
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New to-do..." 
        />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;