import React, { useState, useEffect } from "react";
import store from "Components/store/Reducer";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const theme = createTheme();
theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    store.subscribe(() => syncStore());
  }, []);

  const syncStore = () => {
    setTodos(store.getState());
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

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

  const handleDone = (id) => {
    store.dispatch({
      type: "SET_DONE",
      payload: id,
    });
  };

  const handleReset = () => {
    store.dispatch({
      type: "RESET_TODOS",
    });
  };

  const deleteTodo = (id) => {
    store.dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <section className="card">
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Mes Todo</Typography>
      </ThemeProvider>

      <NewTodo>
        <Input type="text" value={newTodo} onChange={handleChange} />
        <Buttons onClick={handleCreate}>Créer le todo</Buttons>
      </NewTodo>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}>
            {todo.content}
            <Buttons onClick={() => handleDone(todo.id)}>Fait</Buttons>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </Stack>
          </TodoItem>
        ))}
      </ul>
      <ResetButtons onClick={handleReset}>Réinitialiser les TODO</ResetButtons>
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

const Buttons = styled.button`
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

const ResetButtons = styled(Buttons)`
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
