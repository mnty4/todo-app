import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import CreateTodo from "../CreateTodo/CreateTodo";
import Todos from "../Todos/Todos";

const Layout = () => {
  const generateKey = () => {
    let key = "";
    for (let i = 0; i < 10; ++i) key += Math.round(Math.random() * 9);
    return key;
  };

  class Todo {
    constructor(text, key) {
      this.text = text;
      this.key = key || generateKey();
    }
  }

  const [todos, setTodos] = useState([
    new Todo("test"),
    new Todo("heyyoyo and more hey"),
  ]);

  const addTodo = (text) => {
    console.log(todos.length);
    setTodos([...todos, new Todo(text)]);
  };

  const deleteTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  const editTodoList = (key, text) => {
    const newTodo = new Todo(text, key);
    const i = todos.indexOf(todos.find((todo) => todo.key === key));
    const newTodoList = [...todos];
    newTodoList.splice(i, 1, newTodo);
    setTodos(newTodoList);
  };

  useEffect(() => {}, [todos]);

  return (
    <div className={styles.Layout}>
      <CreateTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        editTodoList={editTodoList}
      />
    </div>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
