import React, { useEffect, useState } from 'react';

const ToDoForms = ({addToDo, setToDoEdit, toDoEdit, selectToDo, upDateToDo}) => {
    
    const [title, setTitle] = useState("");
    const [toDo, setToDo] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(()=>{
        if(toDoEdit){
            setTitle(toDoEdit.title)
            setToDo(toDoEdit.toDo)
            setIsComplete(toDoEdit.isComplete)
        }else{
            setTitle("")
            setToDo("")
            setIsComplete(false)
        }

    },[toDoEdit])

    const submit = e => {
        e.preventDefault();
        const data = {
            id: Date.now(),
            title,
            toDo,
            isComplete
        };
        if(toDoEdit){
            data.id = toDoEdit.id;
            upDateToDo(data);
            setTitle("");
            setToDo("");
            setIsComplete(false);
            setToDoEdit(null);
        }else{
            addToDo(data);
            setTitle("");
            setToDo("");
            setIsComplete(false);
            
        }
    

    }
    return (
        <div>
            <form>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                type="text"
                id="title"
                onChange={e => setTitle(e.target.value)} 
                value={title}
                />
            </div>
            <div>
                <label htmlFor="toDo">To do</label>
                <input 
                type="textarea"
                id='toDo'
                onChange={e => setToDo(e.target.value)}
                value={toDo}
                />
            </div>
            <div>
                <label htmlFor="complete">Complete</label>
                <input 
                type="checkbox" 
                id='complete'
                onChange={e => setIsComplete(e.target.checked)}
                checked={isComplete}
                />
            </div>
            <button onClick={submit}>Submit</button>

            {
                toDoEdit && <button type='button' onClick={()=> selectToDo()}>Cancel</button>
            }
            </form>
        </div>
    );
};

export default ToDoForms;