import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./CreateTodo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const CreateTodo = (props) => {
  const [inputValue, setInputValue] = useState("");

  const textInputRef = useRef();

  const submitHandler = (event) => {
    if (event) event.preventDefault();
    const enteredText = textInputRef.current.value;
    props.addTodo(enteredText);
    resetTextArea();
  };

  const resetTextArea = () => {
    setInputValue("");
  };
  const textInputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "\n") {
      resetTextArea();
    }
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      submitHandler();
    }
  };

  return (
    <div className={styles.CreateTodo}>
      <form onSubmit={submitHandler} className={styles.FormTodo}>
        <textarea
          rows="2"
          className={styles.textarea}
          ref={textInputRef}
          onKeyPress={onKeyPress}
          value={inputValue}
          onChange={textInputHandler}
        ></textarea>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

CreateTodo.propTypes = {};

CreateTodo.defaultProps = {};

export default CreateTodo;
