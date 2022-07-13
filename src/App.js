import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import Navbar from "./Navbar"
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProvider from "./providers/UserProviders";
function App() {
  return (
    <UserProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;