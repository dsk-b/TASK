import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUpPage() {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    function callApi(e) {
        e.preventDefault();
        const { firstName, lastName, email, password } = data;
        if (firstName && lastName && email && password) {
            e.preventDefault();
            fetch("http://localhost:3000/signUp", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    // "token":"sivachand"
                },
                body: JSON.stringify(data)
            }).then(res => { console.log(res.status); return res.status === 200 ? navigate('/dashboard') : "" })
        } else {
            e.preventDefault();
            // f[0].setAttribute("style"," outline: 2px solid red")
            // console.log(f[])
        }
    };

    return (
        <div className='container w-50 p-4 text-secondary' >
            <form onSubmit={callApi}>
                <h2 className='text-secondary'>SIGN UP</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input type="text" name='firstName' autoComplete='off' onChange={e => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FirstNAme" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input type="text" name='lastName' autoComplete='off' onChange={e => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter LastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' autoComplete='off' onChange={e => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name='password' autoComplete='off' onChange={e => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" name='password' autoComplete='off' onChange={e => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className=" btn btn-primary w-100 mt-2">Submit</button>
            </form>
        </div>
    )
}

export default SignUpPage;