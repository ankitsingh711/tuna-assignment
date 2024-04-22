import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../store/authenticationSlice";
import { logInRoute } from "../../services/api";
import { useState } from "react";


const LogInForm = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogIn = () => {
        const body = {
            email,
            password
        }
        logInRoute(body);

        dispatch(login());
        navigate('/')
    }
    return (
        <div className="contact_form__container">
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <div className="red_box" />

            <div style={{ marginTop: "20px" }}>
                <span style={{ marginTop: "10px" }}>There are many variations of passages of Lorem Ipsu available,
                    but the majority have suffered alte.
                </span>
            </div>

            <form action="">
                <input type="email" placeholder="Email*" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/><br />
                <input type="password" placeholder="Password*" onChange={(e)=>{
                    setPassword(e.target.value);
                }}/><br />
            </form>
            <div className="forgot-pass">
                <button style={{ border: "none", background: "none", marginLeft: "400px", color: "red", cursor: "pointer" }}>
                    Forgot password ?
                </button>
            </div>
            <input type="submit" value="Login" onClick={handleLogIn}/>
            <div style={{ marginTop: "20px" }}>
                <span>Don't have an account? <NavLink to="/register">
                    <button style={{ border: "none", background: "none", color: "black", fontWeight: "700" }}>Register now!</button>
                </NavLink></span>
            </div>
        </div>
    )
}

export default LogInForm;