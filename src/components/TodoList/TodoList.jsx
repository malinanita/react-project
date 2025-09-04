import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

export default TodoList;
