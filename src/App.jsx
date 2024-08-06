import { Navigate, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import { Navbar } from "./components/navbar/Navbar";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user, authIsReady } = useContext(AuthContext);
  return (
    <div className="App">
      {authIsReady && (
        <>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={user ? <Dashboard /> : <Navigate path="/login" replace/>}/>
              <Route path="/create" element={user ? <Create /> : <Navigate path="/login" replace/>}/>
              <Route path="/projects/:id" element={user ? <Project /> : <Navigate path="/login" replace/>}/>
              <Route path="/login" element={!user ? <Login /> : <Navigate path="/" replace/>} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate path="/" replace/>} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
