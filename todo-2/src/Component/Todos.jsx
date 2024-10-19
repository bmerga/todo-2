import React, { useState } from 'react'
import { Trash2, Edit, Save, Plus, AlignVerticalSpaceBetween } from 'lucide-react'
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
  return (
    <div>
      <h3>My Todo App</h3>
      {
        todos.map((todo) => (
          <div key={todo.id} style={{display: "flex", justifyContent:"space-between", width:"250px"}}> 
            <div >{todo.title}</div>
            <div className='reset-Button'>
            <button>
            <Edit />
            
            </button>
            <button>
            <Trash2 style={{color:"red"}}/> 
            </button>
            </div>
          </div>
                  )) 
        
      }
      
    </div>
  )
}

export default Todos
