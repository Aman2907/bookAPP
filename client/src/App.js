import React from "react";
import { useState } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>       
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;