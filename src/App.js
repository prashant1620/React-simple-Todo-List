import data from './data.json'
import './App.css';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const [editItem,setEditItem] = useState('');
  const [checked,setChecked] = useState(false);
  const [allCheckedSelected,setAllCheckedSelected] = useState(false);

  const [totalActivities,setTotalActivities] = useState(toDoList.length);
  const [doneActivities,setDoneActivities] = useState(0);

  const handleTextAreaEditWithItem =(editItems)=>{
          console.log("handleTextAreaEditWithItem---------",editItems);
          setEditItem(editItems)
    }
     const handleUpdateTask = (task) =>{
        console.log("--------------------------------",task);
        var copy = toDoList.map(item => item.id !== task.id ? item : task);
        console.log("form submitted todo list here------------",copy);
        setToDoList(copy);
        }

        const checkBoxChecked = () =>{
         
                  if(checked){
                    setChecked(false);
                    setAllCheckedSelected(false);
                    setDoneActivities('');
                    setDoneActivities(0)
                  }else{
                    setChecked(true);
                    setDoneActivities(toDoList.length)
                    setAllCheckedSelected(true);
                  }
        }

        const handleAddTask = (addTask) =>{
                let copy = [...toDoList];
                copy = [...copy, { id: toDoList.length + 1, task: addTask, complete: false }];
                setToDoList(copy);
                setTotalActivities(copy.length);
                if(checked){
                  setDoneActivities(copy.length);
                }
        }

            const handleDeleteItem = (id) =>{
              let filtered = toDoList.filter(task => {
                if(task.id==id){
                }else{
                  return task;
                }
              });
              console.log(filtered)
              setToDoList(filtered);

            }
          const deleteAllTasks = () =>{
            setToDoList([])
          }  

          function percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
         } 

     const addItemCheckedCount = (addtask) =>{ 
                    console.log(addtask);
                    if (addtask == 'add'){
                      if(doneActivities <= toDoList.length)
                      setDoneActivities(doneActivities + 1)
                    }else{
                      if(doneActivities<= toDoList.length)
                      setDoneActivities(doneActivities - 1)
                    }
     }



        
              return (
                <div className="App">
                  <div className="checkListClass">
                  <input type="checkbox" name="checkbox" checked={checked} onChange={checkBoxChecked}/>
                  <h2>My CheckList</h2>

                  {allCheckedSelected && (
                      <div className="checkListClass_delete">
                      <button type="button" className="button-header-delete" onClick={deleteAllTasks}>delete all</button>
                    </div>
                  )}                  
                </div>
                <div className="progress-bar">
                <label>{percentage(doneActivities, totalActivities)}%</label>
                <progress value={percentage(doneActivities, totalActivities)} max="100"></progress>
                </div>
                  
                  <ToDoList toDoList={toDoList} handleTextAreaEditWithItem={handleTextAreaEditWithItem}
                  checked={checked} handleDeleteItem={handleDeleteItem} addItemCheckedCount={addItemCheckedCount}/>
                  <Input editItem={editItem} handleUpdateTask={handleUpdateTask} handleAddTask={handleAddTask}/>
                </div>
              );
            }

export default App;
