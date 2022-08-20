import React from 'react'

function SectionNav({HandleSectionClick,HandleSectionClickAll,HandleAddingTask,HandleADDClick,inputValue}) {
  return (
    <div>
    <form style={{display:'grid',gridTemplateColumns:"70% 7%",justifyContent:'center'}} action="javascript:void(0);">
    <input onChange={(e)=>HandleAddingTask(e)} value={inputValue} name="Title" type="text" class="form-control add-task" placeholder="New Task..."></input>
    <button onClick={(e)=>HandleADDClick(e)} type="button" class="btn btn-outline-primary">Add</button>
</form>
<ul style={{display:'grid',gridTemplateColumns:"12% 12% 12%",justifyContent:'center'}} class="nav nav-pills todo-nav">
    <li role="presentation" class="nav-item all-task active"><a onClick={HandleSectionClickAll} name="All"  href="#" class="nav-link">All</a></li>
    <li role="presentation" class="nav-item active-task"><a   onClick={HandleSectionClick} name="Active" href="#" class="nav-link">Active</a></li>
    <li role="presentation" class="nav-item completed-task"><a  onClick={HandleSectionClick} name="Completed" href="#" class="nav-link">Completed</a></li>
</ul>
</div>
  )
}

export default SectionNav
