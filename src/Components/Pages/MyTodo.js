import React, { useState, useEffect } from "react";
import store from "Components/store/store";
import styled from "styled-components";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme();
theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

const Todo = () => {
  /**
   * Defining two local states to store
   * - The newTodo text (from input)
   * - The list of todos coming from the store
   */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  /**
   * At component mounting, subscribe to the store
   * then call the syncStore() method
   */
  useEffect(() => {
    store.subscribe(() => syncStore());
  }, []);

  /**
   * Set local todos state with global state coming from the store
   */
  const syncStore = () => {
    setTodos(store.getState());
  };

  /**
   * Set local newTodo state with current input value
   * @param {Object} event
   */
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  /**
   * Handle the "create todo" button
   * reset the input value then
   * dispatch ADD_TODO action with the new todo as it's payload
   * @param {Object} event
   */
  const handleCreate = (event) => {
    setNewTodo("");
    store.dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.random(),
        content: newTodo,
        done: false,
      },
    });
  };

  /**
   * Handle the "done" button click
   * dispatch the SET_DONE action that will toggle the "done"
   * property on the todo whose "done" button is being clicked
   * @param {number} id
   */
  const handleDone = (id) => {
    store.dispatch({
      type: "SET_DONE",
      payload: id,
    });
  };

  /**
   * Handle the "reset todos" button
   * dispatch the RESET_TODOS action that will empty the global state
   */
  const handleReset = () => {
    store.dispatch({ type: "RESET_TODOS" });
  };

  return (
    <section className="card">
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Mes Todo</Typography>
      </ThemeProvider>

      <NewTodo>
        <Input type="text" value={newTodo} onChange={handleChange} />
        <Button onClick={handleCreate}>Créer le todo</Button>
      </NewTodo>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}>
            {todo.content}
            <Button onClick={() => handleDone(todo.id)}>Fait</Button>
          </TodoItem>
        ))}
      </ul>

      <ResetButton onClick={handleReset}>Réinitialiser les TODO</ResetButton>
    </section>
  );
};

const NewTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin: 0 0.5rem;
  }
`;

const Input = styled.input`
  height: 40px;
  padding: 0 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  height: 40px;
  border: 0;
  background: #25be58;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 6px;
  padding: 0 2rem;
  margin-left: 1rem;
`;

const ResetButton = styled(Button)`
  background: #3d3d3d;
  margin: 2rem 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 1rem 0;
  padding: 1rem;
  background: ${(props) => (props.todo.done ? "#ccc" : "#404040")};
  text-decoration: ${(props) => (props.todo.done ? "line-through" : "initial")};
`;

export default Todo;
