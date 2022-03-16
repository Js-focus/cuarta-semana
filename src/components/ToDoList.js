import React from 'react';

const ToDoList = ({toDoList, removeToDo, selectToDo}) => {

    return (
        <div>
            {toDoList.map(toDo => (
                <ul key={toDo.id}>
                    <li><b>Title</b> {toDo.title}</li>
                    <li><b>To do</b> {toDo.toDo}</li>
                    <li><b>Complete</b> {toDo.isComplete ? "Completada" : "Sin completar"}</li>
                    <button onClick={()=> removeToDo(toDo.id)}>Delet</button>
                    <button onClick={()=> selectToDo(toDo)}>Update</button>
                </ul>
            ))}
        </div>
    );
};

export default ToDoList;