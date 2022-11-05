import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-button"><i class="fas fa-plus-square"></i></button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="">All</option>
          <option value="">completed</option>
          <option value="">uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;