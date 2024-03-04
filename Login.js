import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "./index.css";

function Login() {
    const [action,setAction]=useState("Login");
  return (
    <div className='container'>
       
            <div className='text' >{action}</div>
            <div className='underline'></div>
                  
       


            <div className='inputs'>
                {action==="Login"?<div></div>: <div className='input'>
                <PersonIcon className='img'/>
                <input type='text' placeholder='username'/><br/>
                </div>}
               

                <div className='input'>
                <EmailIcon className='img'/>
                <input type='email' placeholder='email'/><br/>
                </div>
            <div className='input'>
                <LockIcon className='img'/>
                <input type='password' placeholder='password'/><br/>
                </div>
            </div >
            <div className='password'>
                {action==="Sign Up"?<div></div>: <div className='forgot-password'>forget password?<span>Click Here</span></div>}
           
            <div className='submit-container'>
            <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login</div>
            </div>

            </div>
    </div>
  )
}

export default Login
