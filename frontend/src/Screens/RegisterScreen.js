import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {register} from "../actions/userActions"

//import data from "../data"

function RegisterScreen(props){
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [passsword, setPassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Not Amazon - Register"
        if(userInfo){
            props.history.push("/");
        }
        return () => {
            //Do nothing
        };
    }, [userInfo]);
    const registerHandler =(e) =>{
        e.preventDefault();
        dispatch(register(name,email,passsword));
    }

    return <div className="form">
        <form onSubmit={registerHandler}>
            <ul className="form-container">
                <li>
                    <h3>Register an Account</h3>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' onChange={(e)=>setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" id='email' name='email' onChange={(e)=>setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='passsword' name='password' onChange={(e)=>setPassword(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="repassword">Re-enter Password:</label>
                    <input type="repassword" id='repasssword' name='repassword' onChange={(e)=>setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button-main">Create Account</button>
                </li>
                <li>
                    Have an account?
                </li>
                <li>
                    <div className="button-secondary"><Link to="/signin" >Login</Link> </div>
                </li>
                
            </ul>
        </form>
    </div>
}
export default RegisterScreen;
