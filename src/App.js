import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "Components/Pages/Home";
import About from "Components/Pages/About";
import Layout from "Components/UI/Layout";
import FirstGo from "Components/Pages/FirstGo";
import CreateNote from "Components/Pages/CreateNote";
import CreateTodo from "Components/Pages/CreateTodo";
import Identification from "Components/Pages/Myaccount";
import CreateFolder from "Components/Pages/CreateFolder";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="FirstGo" element={<FirstGo />} />
          <Route path="CreateNote" element={<CreateNote />} />
          <Route path="CreateTodo" element={<CreateTodo />} />
          <Route path="Identification" element={<Identification />} />
          <Route path="CreateFolder" element={<CreateFolder />} />
        </Routes>
      </Layout>
    </Router>
  );
}
