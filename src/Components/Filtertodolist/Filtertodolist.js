import React from "react";
import Todos from "../Todos/Todos";



function Filtertodolist({ListOfTasks,handleCheck,sectionState,handleDelete}) {
    
  return (
    
    ListOfTasks.map((e,i)=>sectionState==="All"? <Todos handleDelete={handleDelete}  {...ListOfTasks[i]}  handleCheck={handleCheck}/>
    :(sectionState==="Active"&&e.Active===false)?<Todos handleDelete={handleDelete}  {...ListOfTasks[i]}  handleCheck={handleCheck}/>
    :(sectionState==="Completed"&&e.Active===true)?<Todos handleDelete={handleDelete} {...ListOfTasks[i]}  handleCheck={handleCheck}/>:null)
     
    //<Todos  {...ListOfTasks[i]}  handleCheck={handleCheck}/>
  )
}

export default Filtertodolist
