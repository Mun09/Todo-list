import { useState, useEffect} from 'react';
import OneTodo from './OneTodo.js'

function Todolist({todos, TodoDelete}) {
  return (
    <>
      {
        todos.map((todo, index) => {
          return (
              <div key={todo.id}>
                <OneTodo todo={todo} index={index} TodoDelete={TodoDelete}/>
              </div>
          )
        })
      }
    </>
  )
}

export default Todolist