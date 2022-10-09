import { useState, useEffect} from 'react';
import OneTodo from './OneTodo.js'

function Todolist({todos, TodoDelete, filtering_key}) {
  const [filtered_todos, setFiltered_todos] = useState(todos);
  const compare = (a, b) => {
    if(a.deadline>b.deadline) return 1;
    return -1;
  }

  useEffect(() => {
    const filtered_todos = todos.filter((todo) => 
      (filtering_key === "All") || (todo.importance === filtering_key)
    ).sort(compare);
    setFiltered_todos(filtered_todos);
  }, [filtering_key, todos]);

  return (
    <>
      {
        filtered_todos.map((todo, index) => {
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