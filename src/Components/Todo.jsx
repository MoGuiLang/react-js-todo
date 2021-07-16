import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import TodoForm from "./TodoForm";
const Todo = (props) => {
  const [change, setchange] = useState(props.change ? props.change.value : "");

  const submitChange = (value) => {
    props.changeTodo(change.id, value);
    setchange({ id: null, value: "", isCompleted: false });
  };
  if (change.id) return <TodoForm change={change} onSubmit={submitChange} />;

  return props.todos.map((todo, index) => (
    <div
      className={todo.isCompleted ? "todo todo-green" : "todo todo-red"}
      key={index}
    >
      <div className="todo-text" key={todo.id}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => props.deleteTodo(todo.id)}
          className="delete-icon icon"
        />
        <TiEdit
          onClick={() =>
            setchange({
              id: todo.id,
              value: todo.text,
              isCompleted: todo.isCompleted,
            })
          }
          className="change-icon icon"
        />
        <BsCheck
          onClick={() => props.complete(todo.id)}
          className="complete-icon icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
