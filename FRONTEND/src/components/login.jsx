import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    async function callApi(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/userAuth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const obj = await res.json();
        if (obj.code === 401) {
            //--------- REDIRECTING USER TO LOGIN PAGE ------------;
            navigate('/login');
        } else if (obj.code === 200) {
            //--------- STORING ACCESSTOKEN TO LOCAL STORAGE ------------;
            localStorage.setItem("access-token", obj.accessToken);
            //--------- REDIRECTING USER TO DASHBOARD ------------;
            navigate('/dashboard');
        }
    }
    return (
        <div className="container w-50 p-4 text-secondary">
            <form onSubmit={callApi}>
                <h2 className='text-secondary'>LOGIN</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" autoComplete='off' name='email' onChange={e => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" autoComplete='off' name='password' onChange={e => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;