import styles from './TodoItem.module.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style ={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </span>
      <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete ${todo.text}`}
        title="Delete">
        ❌
      </button>
    </li>
  );
}

export default TodoItem;