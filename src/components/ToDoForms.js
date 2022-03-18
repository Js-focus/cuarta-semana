import React, { useEffect, useState } from 'react';

const ToDoForms = ({addToDo, setToDoEdit, toDoEdit, selectToDo, upDateToDo}) => {
    
    const [title, setTitle] = useState("");
    const [toDo, setToDo] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(()=>{
        if(toDoEdit){
            setTitle(toDoEdit.title)
            setToDo(toDoEdit.description)
            setIsCompleted(toDoEdit.isCompleted)
        }else{
            setTitle("")
            setToDo("")
            setIsCompleted(false)
        }

    },[toDoEdit])

    const submit = e => {
        e.preventDefault();
        const data = {
            title,
            description: toDo,
            isCompleted
        };
        if(toDoEdit){
            data.id = toDoEdit.id;
            upDateToDo(data);
            setTitle("");
            setToDo("");
            setIsCompleted(false);
            setToDoEdit(null);
        }else{
            addToDo(data);
            setTitle("");
            setToDo("");
            setIsCompleted(false);
            
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
                <textarea 
                id='toDo'
                placeholder='to do task'
                onChange={e => setToDo(e.target.value)}
                value={toDo}
                />
            </div>
            <div>
                <label htmlFor="complete">Complete</label>
                <input 
                type="checkbox" 
                id='complete'
                onChange={e => setIsCompleted(e.target.checked)}
                checked={isCompleted}
                />
            </div>
            <div className='buttons'>
            <button onClick={submit}>Submit</button>

            {
                toDoEdit && <button type='button' onClick={()=> selectToDo()}>Cancel</button>
            }
            </div>
            </form>
        </div>
    );
};

export default ToDoForms;