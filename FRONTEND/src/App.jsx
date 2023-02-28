import React from 'react';
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import Dashboard from "./components/dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [tkn, settkn] = useState(true);
  useEffect(() => {
  const interval = setInterval(() => {
    if (window.location.href === "http://localhost:4545/dashboard") {
      const tdata = localStorage.getItem("access-token");
      if (tdata === "" || tdata !== "") {
        //---------------- FETCH CALL TO VERIFY TOKEN -------------------
        fetch("http://localhost:3000/verifytoken", {
          method: "GET",
          headers: {
            "at": tdata,
            "Content-Type": "text/plain"
          },
        }).then(res => res.json()).then(val => {
          settkn(val);
        })
      }
    }
  }, 5000);
    return () => clearInterval(interval);
  }, [tkn]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home comp={<LoginPage />} />} />
        <Route path="/login" element={<Home comp={<LoginPage />} />} />
        <Route path="/signup" element={<Home comp={<SignUpPage />} />} />
        <Route path="/dashboard" element={tkn ? <Dashboard /> : <Home comp={<LoginPage />} />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(props) {
  return (
    <div className="container-fluid bg-secondary p-2 d-flex flex-row justify-content-center align-content-center vh-100 vw-100">
      <div className=" w-50 d-flex bg-light justify-content-center flex-column align-items-center">
        <Link className="btn btn-info w-50 m-4 p-2 text-light" to="/signup">Sign UP</Link>
        <Link className="btn btn-primary w-50 p-2 text-light" to="/login">Login</Link>
        {/* <Link className="btn btn-light w-50 ">Sign UP with google</Link> */}
        {/* <Link className="btn btn-light w-50 ">Sign UP with outlook</Link> */}
      </div>
      <div className="w-50 border d-flex bg-light justify-content-center">
        {props.comp}
      </div>
    </div>
  );
}

export default App;