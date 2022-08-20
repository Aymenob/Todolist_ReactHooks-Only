
import './App.css';
import TodoList from './Components/Todo-lists/Todo-lists';
import Filtertodolist from './Components/Filtertodolist/Filtertodolist';
import SectionNav from './Components/sectionNav';
import { useState } from 'react';

function App() {
  const [ListOfTasks, ListOfTasksUpdate] = useState(TodoList)
  const [TaskToAdd, AddingTask] = useState({ Active: false, checked: false })
  const [sectionState, sectionStateUpdate] = useState("All"); console.log(sectionState)
  const [input, inputUpdated] = useState("")
  const HandleAddingTask = (e) => { AddingTask({ ...TaskToAdd, [e.target.name]: e.target.value, id: Math.random() }); inputUpdated(e.target.value) }
  const HandleADDClick = () => { (input==="") ? alert("hey your todo is empty !") : ListOfTasksUpdate([TaskToAdd, ...ListOfTasks]); inputUpdated(""); }
  const handleCheck = (e) => { ListOfTasksUpdate(ListOfTasks.map(list => list.id === Number(e.target.id) ? { ...list, checked: !list.checked, Active: !list.Active } : list)) }
  const HandleSectionClick = (e) => { sectionStateUpdate(e.target.name) }
  const handleDelete=(e)=>{ListOfTasksUpdate(ListOfTasks.filter((list)=>list.id!==Number(e.target.id)))}
  
  console.log(ListOfTasks.length)

  return (
    <section>
      <div style={{ marginTop: '2cm' }} class="container">
        <div class="card card-white">
          <SectionNav inputValue={input} HandleADDClick={HandleADDClick} HandleAddingTask={HandleAddingTask} HandleSectionClick={HandleSectionClick} HandleSectionClickAll={HandleSectionClick} />
          <div class="todo-list">

            <Filtertodolist handleDelete={handleDelete} sectionState={sectionState} ListOfTasks={ListOfTasks} handleCheck={handleCheck} />
          </div>
        </div>
      </div>

    </section>

  )


}

export default App;
