import React from "react";
import Todos from "../Todos/Todos";



function Filtertodolist({ListOfTasks,handleCheck,sectionState,handleDelete,handleOnEdit,handleEdit}) {
    
  return (
    
    ListOfTasks.map((e,i)=>sectionState==="All"? <Todos handleEdit={handleEdit}  handleOnEdit={handleOnEdit} handleDelete={handleDelete}  {...ListOfTasks[i]}  handleCheck={handleCheck}/>
    :(sectionState==="Active"&&e.Active===false)?<Todos  handleEdit={handleEdit} handleOnEdit={handleOnEdit} handleDelete={handleDelete}  {...ListOfTasks[i]}  handleCheck={handleCheck}/>
    :(sectionState==="Completed"&&e.Active===true)?<Todos  handleEdit={handleEdit} handleOnEdit={handleOnEdit} handleDelete={handleDelete} {...ListOfTasks[i]}  handleCheck={handleCheck}/>:null)
     
    //<Todos  {...ListOfTasks[i]}  handleCheck={handleCheck}/>
  )
}

export default Filtertodolist
