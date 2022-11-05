import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
