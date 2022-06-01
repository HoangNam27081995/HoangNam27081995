import './App.css';
import NewTask from './NewTask';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App container ">
      <div className="row">
      <div className="newtask col">
        New task
        <NewTask/>
      </div>
      <div className="todoList col">
        TodoList
        <TodoList/>
      </div>
      </div>
    </div>
  );
}

export default App;
