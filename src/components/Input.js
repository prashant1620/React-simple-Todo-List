import React, { useState,useEffect } from 'react'

function Input({editItem,handleAddTask,handleUpdateTask}) {

   const [addItem,setAddItem]   =  useState(true);
   const [textarea,setTextArea] = useState('');
   const [inputFiled,setInputFiled] = useState(false);
  
   const [inputFiledSave,setInputFiledSave] = useState(false);
const [textareaEdit,setTextareaEdit] =  useState('');

   useEffect(() => {
       if(editItem){
        setInputFiledSave(true);
        setTextareaEdit(editItem.task)
        setAddItem(false);
        setInputFiled(false);
       }
  
  },[editItem]);


   const handleSetAddItem = () =>{
    setAddItem(false);
    setInputFiled(true)
   }

   const handleTextArea = (e) =>{
       setTextArea(e.target.value);
      
   }
   const closeIconClicked = () =>{
    setInputFiled(false);
    setAddItem(true);
    setTextArea('')
   }
   const closeIconClickedOnEdit = () =>{
    setInputFiledSave(false);
    setAddItem(true);
    setTextareaEdit('')
   }
   const handleSubmitedItem =(e)=>{
        e.preventDefault();
        console.log(textarea);
        setInputFiled(false);
        setAddItem(true);
        setTextArea('');
        handleAddTask(textarea)
   }

   const handleSubmitedSaveItem = (e) =>{
    e.preventDefault();
   }
 const handleTextAreaEdit = (e) =>{
    setTextareaEdit(e.target.value);
 }
 const handleSubmitedEditItem = (e) =>{
    e.preventDefault();
    setInputFiledSave(false);
    setAddItem(true);
    console.log(textareaEdit,editItem);
    var updateItem ={
        id:editItem.id,
        task:textareaEdit,
        complete:editItem.complete
    }
    handleUpdateTask(updateItem)
   
 }
  

  return (
    <div>
        {inputFiled && (<div  className="form-control-class">
       <form onSubmit={handleSubmitedItem}>
        <input type="textarea" style={{height: '60px', width: '80%'}} value={textarea} onChange={handleTextArea} placeholder="Please add items on checklist"/>
       </form>
       <button type="submit" className="btn-addItem" onClick={handleSubmitedItem}>Add</button>
       <button onClick={closeIconClicked}>X</button>
       <button>@</button>
       <button>user</button>
        </div>
       )}
              {inputFiledSave && (<div  className="form-control-class">
                <form onSubmit={handleSubmitedEditItem}>
                    <input type="textarea" style={{height: '60px', width: '80%'}} value={textareaEdit} onChange={handleTextAreaEdit} placeholder="Please add items on checklist"/>
                </form>
                <button type="submit" className="btn-addItem" onClick={handleSubmitedEditItem}>Save</button>
                <button onClick={closeIconClickedOnEdit}>X</button>
                <button>@</button>
                <button>user</button>
                    </div>
                )}
         
        {addItem && (<button className="btn-AddItemList" onClick={handleSetAddItem}>Add Item</button> )}
     

    </div>
  )
}

export default Input