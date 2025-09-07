import styles from './TodoItem.module.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`${styles.listItem} ${todo.completed ? styles.listItemCompleted : ''}`}>
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
    <span className={`${styles.todoText} ${todo.completed ? styles.textCompleted : ''}`}>
      {todo.text}
    </span>
     <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;