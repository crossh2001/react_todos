import { useState } from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0)
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodo(
      (currentTodo) =>{
        return[...currentTodo, {id: crypto.randomUUID(), title: newItem, completed: false}]
      }
    );
    
    setNewItem("")
  }


  function toggleToDo(id, completed){
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if(todo.id === id){
          return{...todo, completed}
        }

        return todo;
      })
    })
  }

  function deleteToDo(id){
    setTodo(currentTodo =>{
      return currentTodo.filter(todo => todo.id !==id)
    })
  }

  console.log(todo);
  return (
    <>
      <form  className='new-item-form'onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor='item'>Item</label>
          <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} id="item"/>
        </div>
        <button className='btn'>Click Here</button>
      </form>
      <h1>Todo List</h1>
      <ul>
        {todo.length === 0 && "No ToDos"}
        {todo.map(todo => {
          return(
            <li key={todo.id}>
                <input 
                value={"newItem"} 
                onChange={e => toggleToDo(todo.id, e.target.checked)}
                type="checkbox" checked={todo.completed}/>
                {todo.title}
                <button onClick={() => deleteToDo(todo.id)} 
                className='btn btn-danger'>Delete</button>
            </li>
          )
        })}
      </ul>

    </>
  )
}

export default App
