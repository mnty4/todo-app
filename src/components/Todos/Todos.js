import React from "react";
import PropTypes from "prop-types";
import styles from "./Todos.module.css";
import Todo from "../Todo/Todo";

const Todos = (props) => {
  return (
    <div className={styles.Todos}>
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            deleteTodo={props.deleteTodo}
            editTodoList={props.editTodoList}
          />
        );
      })}
    </div>
  );
};

Todos.propTypes = {};

Todos.defaultProps = {};

export default Todos;
