import React from "react";
import Login from "./Components/Login";
import "./App.css";


import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const App = () => {


  const user = useSelector(selectUser)
  return (
    <div className="app">
    { !user ?   <Login /> :
      <Logout />}
    </div>
  );
};

export default App;