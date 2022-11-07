import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState(null);
  const [uncompletedTodo, setUncompletedTodo] = useState(null);
  const [select, setSelect] = useState('all')

  useEffect(() => {
    // console.log(completedTodo);
    // console.log(uncompletedTodo);
    // console.log(select);
  }, [completedTodo, uncompletedTodo, select])

  function handleCheck(id) {
    const newTodos = [...todo];
    const todo2 = newTodos.find((todo) => todo.id === id);
    console.log(todo2);
    todo2.completed = !todo2.completed;
    return setTodo(newTodos);
  }


  useEffect(() => {
    // console.log(todo);
  }, [todo])

  return (
    <div className="App">
      <Header />
      <Form todo={todo} setTodo={setTodo} setCompletedTodo={setCompletedTodo} setUncompletedTodo={setUncompletedTodo} setSelect={setSelect} />
      <TodoList todo={todo} handleCheck={handleCheck} completedTodo={completedTodo} uncompletedTodo={uncompletedTodo} select={select} setUncompletedTodo={setUncompletedTodo} setCompletedTodo={setCompletedTodo} setTodo={setTodo} />
    </div>
  );
}

export default App;
