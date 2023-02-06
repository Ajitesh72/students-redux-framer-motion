import './App.css';
import { Route, Routes } from "react-router-dom";
import Admin from "../src/pages/admin";
import Students from "../src/pages/students";
import Home from "../src/pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div >
      <div>
        <Navbar/>
      </div>
       <Routes>
       <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/Students"
          element={<Students/>}
        />
        <Route
          path="/Admin"
          element={<Admin/>}
        />
        <Route
          path="/*"
          element={<h1>ITS A REDUX PRACTICE APPLICATION NOT A CHRISTMAS PRESENT YOU FOOL</h1>}
        />

       </Routes>
       

      </div>
  );
}

export default App;
