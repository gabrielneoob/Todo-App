import React, { useRef, useState } from "react";

const Form = ({ todo, setTodo }) => {
  const inputText = useRef();
  const [notificacao, setNotificacao] = useState(null);

  function handleAddTodo(e) {
    e.preventDefault();

    const texto = inputText.current.value;
    const randomId = Math.floor(Math.random() * 9000);

    if (texto && !todo.some((todo) => todo.todo === texto)) {
      setTodo([...todo, { id: randomId, todo: texto, completed: false }])
    } else {
      setNotificacao(<span style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: '0', backgroundColor: 'rgba(0,0,0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Todo já adicionado!</span>)
      setTimeout(() => {
        setNotificacao(null);
      }, 2000)
    }
    inputText.current.value = null
  }
  return (
    <form>
      <input ref={inputText} type="text" className="todo-input" />
      {notificacao ? notificacao : null}
      <button onClick={handleAddTodo} type="submit" className="todo-button"><i className="fas fa-plus-square"></i></button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="">All</option>
          <option value="">completed</option>
          <option value="">uncompleted</option>
        </select>
      </div>
    </form >
  );
}

export default Form;