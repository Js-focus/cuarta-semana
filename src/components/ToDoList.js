import React from 'react';

const ToDoList = ({toDoList, removeToDo, selectToDo}) => {

    return (
        <div className='list'>
            {toDoList.map(toDo => (
                <ul key={toDo.id} className="ul-list">
                    <li><b>Title:</b>  {toDo.title}</li>
                    <li><b>To do:</b>  <p>{toDo.toDo}</p></li>
                    <li><b>Complete:</b>  {toDo.isComplete ? "Completada" : "Sin completar"}</li>
                    <div className='buttons-list'>
                        <button onClick={()=> removeToDo(toDo.id)}>Delet</button>
                        <button onClick={()=> selectToDo(toDo)}>Update</button>
                    </div>
                </ul>
            ))}
        </div>
    );
};

export default ToDoList;