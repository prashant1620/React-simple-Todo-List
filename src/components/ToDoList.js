import React from 'react'
import Todo from './Todo';

function ToDoList({toDoList,handleTextAreaEditWithItem,checked,handleDeleteItem,addItemCheckedCount}) {
    // console.log("here total data",data);
   
            return (
                <div className="todo-list-container">
        
               {toDoList.map((items,index)=>{
                   return (
                       <Todo item={items} key={items.id} handleTextAreaEditWithItem={handleTextAreaEditWithItem}
                       handleDeleteItem={handleDeleteItem}  addItemCheckedCount={addItemCheckedCount}
                       checked={checked}/>
                   )
               })}
                

                </div>
            )
}

export default ToDoList