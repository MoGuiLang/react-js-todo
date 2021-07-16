import React, { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: todo,
      isCompleted: false,
    });
    setTodo("");
  };
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitTodo} className="form">
      {props.change ? (
        <>
          <input
            type="text"
            placeholder="Change todo"
            value={todo}
            name="text"
            onChange={handleInputChange}
            className="change"
          />
          <button className="btn">Change todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Write a todo"
            value={todo}
            name="text"
            onChange={handleInputChange}
            className="input"
          />
          <button className="btn">Add a todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
