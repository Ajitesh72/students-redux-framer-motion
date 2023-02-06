import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/navbar.css";

function Navbar() {
  
  let navigate = useNavigate();

  function adminHandler() {
    navigate("/admin");
  }
  function studentHandler() {
    navigate("/students");
  }
  function homeHandler() {
    navigate("/");
  }
  function surpriseHandler() {
    navigate("/*");
  }

  return (
    <div className='Navbar-sider'>
      <nav className="Navbar">
        <ul onClick={homeHandler} className="Navbar-title">
          HOME
        </ul>
        <ul onClick={studentHandler}  className="Navbar-title">
          STUDENTS
        </ul>
        <ul onClick={adminHandler}  className="Navbar-title">
           FOR ADMIN
        </ul>
        <ul onClick={surpriseHandler}  className="Navbar-title">
           CLICK ME FOR SURPRISE
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;