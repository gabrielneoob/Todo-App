import React, { useEffect } from 'react'
import Todo from './Todo'

const TodoList = ({ todo, handleCheck, completedTodo, uncompletedTodo, select, setUncompletedTodo, setCompletedTodo, setTodo }) => {
  const windowWidth = window.innerWidth;
  const realTodo = select === 'all' ? todo : select === 'completed' ? completedTodo : uncompletedTodo;

  useEffect(() => {
    console.log(realTodo)
  }, [select])

  const todoCSS = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }

  function removeItem(id) {
    const newTodos = [...realTodo];
    setTodo(todo.filter((todo) => todo.id !== id))
    if (select === 'completed') {
      setCompletedTodo(newTodos.filter((todo) => todo.id !== id))
    } else {
      setUncompletedTodo(newTodos.filter((todo) => todo.id !== id))
    }
  }

  return (
    <div style={todoCSS}>
      <div style={{ display: 'grid', gap: '10px', minWidth: windowWidth > 500 ? "500px" : "300px" }}>
        {realTodo.map((item) => <Todo handleCheck={handleCheck} key={item.id} item={item} removeItem={removeItem} />)}
      </div>
    </div>
  )
}

export default TodoList