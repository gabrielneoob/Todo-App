import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
