import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "Components/Pages/Home";
import About from "Components/Pages/About";
import Layout from "Components/UI/Layout";
import FirstGo from "Components/Pages/FirstGo";
import Myaccount from "Components/Pages/Myaccount";
import CreateFolder from "Components/Pages/CreateFolder";
import MyTodo from "Components/Pages/MyTodo";
import MyNote from "Components/Pages/MyNote";
import Presentation from "Components/Pages/Presentation";
import Note from "Components/Pages/Note";
import Registration from "Components/Pages/Registration";
import { Store } from "@mui/icons-material";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="FirstGo" element={<FirstGo />} />
          <Route path="Myaccount" element={<Myaccount />} />
          <Route path="CreateFolder" element={<CreateFolder />} />
          <Route path="MyTodo" element={<MyTodo />} />
          <Route path="MyNote" element={<MyNote />} />
          <Route path="Presentation" element={<Presentation />} />
          <Route path="Note" element={<Note />} />
          <Route path="Registration" element={<Registration />} />
        </Routes>
      </Layout>
    </Router>
  );
}
