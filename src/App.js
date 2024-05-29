import logo from './logo.svg';
import './App.css';
import TodoList from './Component/TodoList';
import TodoInput from './Component/TodoInput';

function App() {
  return (
    <div className="App">
      <h3>TO-DO LIST</h3>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
