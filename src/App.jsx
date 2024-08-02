import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import { Navbar } from "./components/navbar/Navbar";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/create" Component={Create} />
          <Route path="/projects/:id" Component={Project} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
