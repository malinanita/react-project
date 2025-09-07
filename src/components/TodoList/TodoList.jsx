import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
