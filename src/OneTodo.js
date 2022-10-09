import './OneTodo.css'

function OneTodo({todo, index, TodoDelete}) {

  const Deleteclickhandler = () => {
    TodoDelete(index)
  }

  return (
    <div>
      <div className="one_component">
        <p>importance: {todo.importance}</p>
        <p>title: {todo.title}</p>
        <p>content: {todo.content}</p>
        <p>deadline: {todo.deadline}</p>
      </div>
      <button onClick={Deleteclickhandler}>Delete</button>
    </div>

  )
}

export default OneTodo