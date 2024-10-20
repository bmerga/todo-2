import React, { useState } from 'react'
import { Trash2, Edit, Save, Plus, AlignVerticalSpaceBetween, Target } from 'lucide-react'
import "../App.css"
function Todos() {
 const initData = [
    {
      id: 1,
      title: "study react",
      completed: false
    },
    {
        id: 2,
        title: "study JS",
        completed: false
      }
]
const [todos, setTodos] = useState(initData)
const [inputValue, setInputValue] = useState("")
const [activeId, setActiveId] = useState(null)

const toggleCompleted = (id) => {
const newArray = todos.map((todo) => {
  return id === todo.id ? {...todo, completed: !todo.completed}: todo;
});
setTodos(newArray)
};
const handleDelete = (id)=> {
const newArray = todos.filter((todo)=>id!==todo.id)
setTodos(newArray)
}
const addTodo = () => {
  if(inputValue.trim()!=="") {
    const newArray = [
      ...todos, 
      {id: Date.now(), title: inputValue, completed: false}]
      setTodos(newArray);
      setInputValue("")
  }
}

  return (
    <div>
      <h3>My Todo App</h3>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        marginBlock: "10px"
      }}>
        <input 
        type='text' 
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/>
        <button className='reset-Button' onClick={addTodo}>
          <Plus/>
        </button>
      </div>
      {todos.map((todo) => (
          <div key={todo.id} 
          style={{
            display: "flex", 
            justifyContent:"space-between", 
            width:"400px"}}> 
            <div style={{display:"flex"}}>
              <input type='checkbox' checked={todo.completed} onChange={()=>toggleCompleted(todo.id)} />
              <div style={{textDecoration: todo.completed? "line-through": "none"}}>{todo.title}</div>
            </div>
            
            <div>
            <button 
            className='reset-Button' 
            onClick={()=>startEditing(todo.id, todo.title)}> <Edit style={{marginRight:"10px"}}/> </button>
            <button className='reset-Button' onClick={()=>handleDelete(todo.id)} > <Trash2 style={{color:"red"}}/> </button>
            </div>
          </div>
                  )) 
        
      }
      
    </div>
  )
}

export default Todos
