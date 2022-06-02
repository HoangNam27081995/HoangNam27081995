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
        <div className="Footer">
          <p className="col-3"> Bulk Action </p>
           <button className="btn btn-primary col-2">Done</button>
           <button className="btn btn-danger col-2">Remove</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
