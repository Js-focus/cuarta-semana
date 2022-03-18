
import './App.css';
import ToDoForms from './components/ToDoForms';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  //ESTADO PRINCIPAL
  const [toDo, setToDo] = useState([]);
  const [toDoEdit, setToDoEdit] = useState(null);
  

  useEffect(()=>{
    getToDo();

  },[])

  const getToDo = () =>{
    axios.get(`https://todo-app-academlo.herokuapp.com/todos/`)
    .then(res => setToDo(res?.data))
  }


  const addToDo = (add) => {
    console.log(add)
    axios.post("https://todo-app-academlo.herokuapp.com/todos/", add)
    .then(() => getToDo())
  }



  const revomeToDo = (id) => {
    //Con consumo API
    axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
    .then(() =>getToDo())
    //con metodo filter
    //setToDo(toDo.filter(Tdo => Tdo.id !== id))
  }


  const selectToDo = (ToDo)  => {
    if(ToDo){
    console.log(ToDo.id)
    axios.get(`https://todo-app-academlo.herokuapp.com/todos/${ToDo.id}/`)
    .then(res => setToDoEdit(res.data));
    }else if(ToDo === undefined){
      setToDoEdit(null)
    }
  }


  const upDateToDo = (data) => {
    console.log(data)
    axios.put(`https://todo-app-academlo.herokuapp.com/todos/${data.id}/`, data)
    .then(()=> getToDo())
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
