
import './App.css';
import ToDoForms from './components/ToDoForms';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const toDoDefault = [
    {
      id:"1",
      title: "Lorem ipsum dolor",
      toDo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, in.",
      isComplete: true
    },
    {
      id:"2",
      title: "Lorem ipsum dolor",
      toDo: "Lorem ipsum dolor sit  adipisicing elit. Debitis, in.",
      isComplete: false
    },
    {
      id:"3",
      title: "Lorem ipsum dolor",
      toDo: "Lorem nsectetur, adipisicing elit. Debitis, in.",
      isComplete: true
    },
  ]
  //ESTADO PRINCIPAL
  const [toDo, setToDo] = useState(toDoDefault);
  const [toDoEdit, setToDoEdit] = useState(null);

  const addToDo = (add) => {
    setToDo([...toDo , add])
  }

  const revomeToDo = (id) => {
    //Con metodo findIndex
    const index = toDo.findIndex(toD => toD.id === id)
    toDo.splice(index, 1)
    setToDo([...toDo])
    //con metodo filter
    //setToDo(toDo.filter(Tdo => Tdo.id !== id))
  }
  const selectToDo = (ToDo)  => {
    
    setToDoEdit(ToDo); 
  }
  const upDateToDo = (data) => {
    console.log(data)
    const index = toDo.findIndex(
      toDoI => toDoI.id === data.id
    );
    toDo[index] = data;
    setToDo([...toDo]);
  };
  
  return (
    <div className="App">
      <h1>To do app</h1>
      <ToDoForms 
      addToDo={addToDo} 
      toDoEdit={toDoEdit}
      selectToDo={selectToDo}
      upDateToDo={upDateToDo}
      setToDoEdit={setToDoEdit}
      />

      <ToDoList 
      toDoList = {toDo} 
      removeToDo={revomeToDo} 
      selectToDo={selectToDo}/>
    </div>
  );
}

export default App;
