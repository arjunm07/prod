import React, { useState } from 'react';
import './/CSS/Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Login = () => {
    const [empId, setEmpId] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(empId, password);
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>
                    Login
                </h1>

                <div className='input-box'>
                    <input
                        type='text'
                        placeholder='Employee ID'
                        required
                        onChange={e=>setEmpId(e.target.value)}
                        />
                    <FaUser className='icon' />
                </div>

                <div className='input-box'>
                    <input
                        type='password'
                        placeholder='Password'
                        required 
                        onChange={e=>setPassword(e.target.value)}
                        />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' />
                        Remember me
                    </label>
                    <a href='#'>
                        Forgot Password?
                    </a>
                </div>

                <button type='submit' onClick={()=>{navigate('/')}}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login