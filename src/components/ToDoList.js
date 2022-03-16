import React from 'react';

const ToDoList = ({toDoList, removeToDo, selectToDo}) => {

    return (
        <div className='list'>
            {toDoList.map(toDo => (
                <ul key={toDo.id} className="ul-list">
                    <li><b>Title:</b>  {toDo.title}</li>
                    <li><b>To do:</b>  {toDo.toDo}</li>
                    <li><b>Complete:</b>  {toDo.isComplete ? "Completada" : "Sin completar"}</li>
                    <button onClick={()=> removeToDo(toDo.id)}>Delet</button>
                    <button onClick={()=> selectToDo(toDo)}>Update</button>
                </ul>
            ))}
        </div>
    );
};

export default ToDoList;