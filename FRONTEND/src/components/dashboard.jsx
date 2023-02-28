import Layouts from "./layout";
import RenderComp from "./forms";
import { useDispatch } from "react-redux";
import { loadData } from "../componentSlice";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [layout, setlayout] = useState("one");
    useEffect(() => {
        fetch("http://localhost:3000/layouts")
            .then(res => { return res.json() })
            .then(val => dispatch(loadData({ layouts: val, formLayout: layout })));
    }, [layout]);

    function handleLogout() {
        localStorage.clear();
        return navigate('/login');
    }

    return <div className="container-fluid bg-primary p-1 d-flex justify-content-center align-items-start vw-100 h-auto">
        <div className="row bg-light h-100 w-100">
            <div style={{ display: "none" }} className="err-msg border border-danger p-2 m-1 bg-light rounded text-danger">
            </div>
            <div style={{ display: "none" }} className="success-msg border border-success p-2 m-1 bg-light rounded text-success">
            </div>
            <button className="btn btn-primary border rounded-0" onClick={handleLogout}>LOGOUT</button>
            <div className='col-2 d-flex flex-column'>
                <Layouts setlayout={setlayout} />
            </div>
            <div className="col-10 d-flex flex-column justify-content-start align-items-start">
                <RenderComp />
            </div>
        </div>
    </div>
}

export default Dashboard;