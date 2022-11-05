import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [todo, setTodo] = useState([]);
  const LOCAL_STORAGE_KEY = 'todo.app';

  useEffect(() => {
    console.log(todo);
  }, [todo])

  return (
    <div className="App">
      <Header />
      <Form todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
