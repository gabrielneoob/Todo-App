import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [todo, setTodo] = useState([]);
  const LOCAL_STORAGE_KEY = 'todo.app';

  useEffect(() => {
    const storagedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storagedTodos) setTodo(JSON.parse(storagedTodos));
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo])

  return (
    <div className="App">
      <Header />
      <Form todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
