function TodoItem({ todo }) {
  return (
    <li>
      {todo.text} {todo.completed ? '(done)' : ''}
    </li>
  );
}

export default TodoItem;