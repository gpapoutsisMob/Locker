// import React, { useState, useRef, useEffect} from "react";
// import TodoList from "./TodoList";

import './Lockers';
import BasicMasonry from './Lockers';

//  const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // const [todos, setTodos] = useState([])
  // const todoNameRef = useRef()

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
  //   if(storedTodos) setTodos(storedTodos)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // }, [todos])

  // function handleAddTodo(e){
  //   const name = todoNameRef.current.value
  //   if(name === '' )  return
  //   setTodos(prevTodos => {
  //       var id = 0
  //       if(prevTodos.length > 0)
  //         id = prevTodos.length + 1
  //       return [...prevTodos, {id: id, name: name, complete: false}]
  //   })
  //   todoNameRef.current.value = null
  //}

  return (
    // <>
    //   <TodoList
    //    todos = {todos}/>
    //   <input ref={todoNameRef} type="text"/>
    //   <button
    //     onClick={handleAddTodo}>
    //       Add Todo
    //   </button>
    //   <button>Clear Completed Todos</button>
    //   <div>0 left To do</div>
    // </>
    
    BasicMasonry()
  );
}

export default App;
