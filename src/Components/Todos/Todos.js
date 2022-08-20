import React from 'react'
import { useState } from 'react'
function Todos(props) {
const {Title,show,id,checked,handleCheck,handleDelete,handleOnEdit,handleEdit}=props  

  return (
    
    <div class="todo-item">
      <button id={id}  onClick={handleDelete} class="fa fa-trash"></button>
      <button id={id}    onClick={handleEdit} class="fa fa-edit"></button>
        <div  class="checker">
          <span >
           
            <input id={id}  name="topping" 
             checked={checked} type="checkbox" onClick={handleCheck}/>
            </span>
            
          </div>
        {show&&<input id={id} type="text" defaultValue={Title}  onChange={handleOnEdit}/>}
       {!show&&<span style={checked===true?{textDecoration:"line-through"}:{textDecoration:"none"}} >{Title}</span>}
       
       
    </div>   
    
     
  )
  
}

export default Todos
