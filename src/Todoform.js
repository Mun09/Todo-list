import { useState } from 'react';
import TextInput from './TextInput.js';
import Selector from './Selector';
import Dateinput from './Dateinput.js';
import './Todoform.css'

function Todoform({TodoGet, id, setId}) {
  const [todo, setTodo] = useState(
    {
      id: "",
      importance: "",
      title: "",
      content: "",
      deadline: ""
    }
  );

  const todo_change = (e) => {
    e.preventDefault();
    const condition = todo.importance==="" || todo.title==="" || todo.deadline==="";
    if(condition){
      alert("내용을 제외하고 반드시 기입하세요");
      return;
    }
    setTodo({...todo, id:id})
    setId(id+1);
    TodoGet(todo);
  }

  return(
    <>
      <form onSubmit={todo_change} className="asdf">

        <label htmlFor="todo-importance">Todo-Importance</label>
        <Selector value={todo.title} setValue={(value) => {setTodo({...todo, importance: value})}} id="todo-importance"/>
        <br></br>

        <label htmlFor="todo-title">Todo-Title</label>
        <TextInput value={todo.title} setValue={(value) => {setTodo({...todo, title: value})}} id="todo-title"/>
        <br></br>

        <label htmlFor="todo-content">Todo-Content</label>
        <TextInput value={todo.content} setValue={(value) => {setTodo({...todo, content: value})}} id="todo-content"/>
        <br></br>

        <label htmlFor="todo-deadline">Todo-Deadline</label>
        <Dateinput setValue={(value) => {setTodo({...todo, deadline: value})}} id="todo-deadline"/>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Todoform