import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { FaHome } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AdminPage from "./pages/adminPage.jsx";
import TestPage from "./pages/test.jsx";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/loginPage.jsx";

function App() {
  return (
    <div className="w-full h-screen">

      <Toaster position='top-right'/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin/*" element={<AdminPage/>} />
        <Route path="/test" element={<TestPage/>} />
        <Route path="/login" element={<LoginPage/>}/>


      
      </Routes>
    </div>
  );
}

export default App;
