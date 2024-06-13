import './App.css'
import React, { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import DisplayTodos from './components/DisplayTodos'

function App() {
  
  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) => {
    setTodoList((prev) => [...prev, todo])
  }

  const updateTodo = (updatedTodos) => {
    setTodoList(updatedTodos)
  }
  
  return (
    <div className="App">
      <CreateTodo onTodoSubmit={ addTodo }/>
      <DisplayTodos todoList={ todoList } onTodoChange={ updateTodo }/>
    </div>
  );
}

export default App;