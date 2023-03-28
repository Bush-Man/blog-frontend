import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { login } from '../../ApiRequests/AuthRequest.js';
import { AuthContext } from '../../Context/AuthContext.js';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Login = () => {

  const [data, setData] = useState({ username: "", password: "" });
  const {isLoading,dispatch } = useContext(AuthContext);
  const [passVisible, setPassVisible ] = useState(false);
  const navigate = useNavigate();
//===========show and hide password============================
  const handleClick = () => {
    setPassVisible((prev) => !prev);
}
//============================================================//
  
  
//NB e.preventDefault() method should only be used when submitting
  
//==============submitting to database==========================
  const handleSubmit = (e) => {
    e.preventDefault();
    login( data,dispatch);
    resetForm();
    navigate("/");
    
  }
//==============================================================//
  
  
//=================updating data================================
  const handleChange = (e) => {
   
    setData({ ...data, [e.target.name]: e.target.value });
  }

//================================================================//

  
//====================reset form=================================
  const resetForm=() => {
    setData({ username: "", password: "" });
  }

  
  return (
    <div className='login'>
          <form className='formLogin' onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} value={data.username} required />
        <div style={{position:"relative"}}>
          <input type={passVisible?"text":"password"} name="password" onChange={handleChange} value={data.password} required/>
          
          {passVisible ? <VisibilityOffIcon style={{ position: "absolute", top: "5px" }} onClick={handleClick} /> : <VisibilityIcon style={{ position: "absolute", top: "5px" }} onClick={handleClick} />
          }
        </div>
              <button className={isLoading?'disabled':'loginBtn'} type="submit" >SIGN UP</button>
          </form>
          

    </div>
  )
}

export default Login