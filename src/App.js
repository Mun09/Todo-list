import { useState } from 'react';
import Todoform from './Todoform.js';
import Todolist from './Todolist.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  const TodoGet = (newdata) => {
    setTodos(todos.concat([newdata]));
  }

  const TodoDelete = (index) => {
    const l = todos.length;
    setTodos(todos.slice(0, index).concat(todos.slice(index+1, l)));
  }

  return (
    <>
      <h1>TODO-LIST</h1>
      <Todoform TodoGet={TodoGet} id={id} setId={setId}/>
      <Todolist todos={todos} setTodos={setTodos} TodoDelete={TodoDelete}/>
    </>
  );
}

export default App;
