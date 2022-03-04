import React, { useState,useEffect } from 'react'


function Todo({item,handleTextAreaEditWithItem,checked,handleDeleteItem,addItemCheckedCount}) {

    const [addItemChecked,setAddItemChecked] = useState(false);
    const [inputShow,setInputShow] = useState(false);
   

    useEffect(() => {
        if(checked){
            setAddItemChecked(false);
        }else{
            setAddItemChecked(false);
        }
   
   },[checked]);

                const handleOver = () =>{
                    setInputShow(true)
                }
                const handleOut = () =>{
                    setInputShow(false)
                }
  
    const handleTextAreaEdit =(itemedit) => {
        handleTextAreaEditWithItem(itemedit)
    }
    const checkBoxChanged = () =>{
        if(checked){

        }else{
            if (addItemChecked){
                setAddItemChecked(false);
                addItemCheckedCount('mines')
            }else{
                setAddItemChecked(true);
                addItemCheckedCount('add')
            }
        }
        
    }
  return (
    <div key={item.id} className="Todo-item"  onMouseEnter={handleOver} onMouseLeave={handleOut}>
        <input type="checkbox" name="checkbox" value={item.id} checked={checked ? checked:addItemChecked} onChange={checkBoxChanged} />
        <h4 onClick={()=>handleTextAreaEdit(item)} className={addItemChecked || checked ?`tasks-checked`:'tasks-check'}>{item.task}</h4>
                    {inputShow && (
                    <div className="Todo-left-side-hover">
                       <button onClick={()=>handleDeleteItem(item.id)}>Delete</button>
                       <button>complete</button>
                       <button>...</button>
                    </div>
                    )}
                        
    </div>
  )
}



export default Todo
 