import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Todo.module.css";
import Card from "../Card/Card";
const Todo = ({ todo, deleteTodo, editTodoList }) => {
  const [textArea, setTextArea] = useState(false);
  const textAreaRef = useRef();
  const editTodo = () => {
    if (textArea) editTodoList(todo.key, textAreaRef.current.value);
    setTextArea(!textArea);
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      editTodo();
      editTodoList(todo.key, textAreaRef.current.value);
    }
  };

  return (
    <Card>
      <div className={styles.Todo}>
        {textArea ? (
          <textarea
            defaultValue={todo.text}
            onKeyPress={onKeyPress}
            className={styles.TextArea}
            ref={textAreaRef}
          ></textarea>
        ) : (
          todo.text
        )}
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <button
          className="btn btn-primary"
          style={{ height: "40px" }}
          onClick={editTodo}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          style={{ height: "40px" }}
          onClick={() => deleteTodo(todo.key)}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
