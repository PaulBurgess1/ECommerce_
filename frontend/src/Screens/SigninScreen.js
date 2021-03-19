import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {signin} from "../actions/userActions"

//import data from "../data"

function SigninScreen(props){
    const [email, setEmail] =useState('');
    const [passsword, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return () => {
            //Do nothing
        };
    }, [userInfo]);
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(signin(email,passsword));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h3>Login</h3>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
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
                    <button type="submit" className="button-main">Signin</button>
                </li>
                <li>
                    Don't have an account?
                </li>
                <li>
                    <div className="button-secondary"><Link to="/register" >Create an account</Link> </div>
                </li>
                
            </ul>
        </form>
    </div>
}
export default SigninScreen;
