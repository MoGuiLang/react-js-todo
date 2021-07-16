import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text) return;
    const Todos = [todo, ...todos];
    setTodos(Todos);
  };
  const deleteTodo = (id) => {
    const deleted = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleted);
  };
  const changeTodo = (id, value) => {
    if (!value.text) return;
    setTodos((prev) => prev.map((item) => (item.id === id ? value : item)));
  };
  const complete = (id) => {
    const completed = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(completed);
  };
  return (
    <div className="container">
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodo={changeTodo}
        complete={complete}
      />
    </div>
  );
};

export default Todos;
