import React, { useEffect } from 'react'

const Todo = ({ item, handleCheck, removeItem }) => {

  const icon = {
    cursor: 'pointer',
    position: 'absolute',
    right: '0px',
    height: '100%',
    color: '#fff',
    padding: '10px',
    backgroundColor: 'orange',
    border: 'none'
  }

  const icon2 = {
    cursor: 'pointer',
    position: 'absolute',
    right: '32px',
    height: '100%',
    color: '#fff',
    padding: '10px',
    backgroundColor: 'green',
    border: 'none'
  }

  function activeHandleCheck() {
    handleCheck(item.id)
    console.log(item);
  }

  function activeRemoveItem() {
    removeItem(item.id)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', color: '#000', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '5px 0 0 5px', position: 'relative', opacity: item.completed ? '0.5' : '1' }}>
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }} >{item.todo}</span>
      <button onClick={activeHandleCheck} style={icon2}><i className="fa-solid fa-check"></i></button>
      <button onClick={activeRemoveItem} style={icon}><i className="fa-solid fa-trash"></i></button>

    </div>

  )
}

export default Todo