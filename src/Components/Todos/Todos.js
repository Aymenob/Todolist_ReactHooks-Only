import React from 'react'

function Todos(props) {
const {Title,id,checked,handleCheck,handleDelete}=props   
  return (
    
    <div class="todo-item">
      <button id={id}  onClick={handleDelete} class="fa fa-trash"></button>
        <div  class="checker">
          <span >
            <input id={id}  name="topping" 
             checked={checked} type="checkbox" onClick={handleCheck}/>
            </span>
          </div>
        <span style={checked===true?{textDecoration:"line-through"}:{textDecoration:"none"}} >{Title}</span>
       
       
    </div>   
    
     
  )
  
}

export default Todos
