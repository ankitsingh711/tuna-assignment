import { NavLink } from "react-router-dom";


const LogInForm = () => {
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
                <input type="email" placeholder="Email*" /><br />
                <input type="password" placeholder="Password*" /><br />
            </form>
            <div className="forgot-pass">
                <button style={{ border: "none", background: "none", marginLeft: "400px", color: "red", cursor: "pointer" }}>
                    Forgot password ?
                </button>
            </div>
            <input type="submit" value="Login" />
            <div style={{ marginTop: "20px" }}>
                <span>Don't have an account? <NavLink to="/register">
                    <button style={{ border: "none", background: "none", color: "black", fontWeight: "700" }}>Register now!</button>
                </NavLink></span>
            </div>
        </div>
    )
}

export default LogInForm;