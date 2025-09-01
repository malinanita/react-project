import './App.css'
import AddTodoForm from './components/AddToDoForm/AddToDoForm';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';

function App() {

  return (
    <div>
      <AddTodoForm />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App
