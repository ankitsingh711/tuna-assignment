const RegisterForm = () => {
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
                <input type="number" placeholder="Phone Number*" /><br />
                <input type="password" placeholder="Enter Password*" /><br />
                <input type="password" placeholder="Re-Enter Password*" /><br /> 
            </form>
            <input type="submit" value="SignUp" />
            <div style={{marginTop: "20px"}}>
            <span>Already have an account? <button style={{border: "none", background: "none", color: "black", fontWeight: "700"}}>LogIn !</button></span>
            </div>
        </div>
    )
}

export default RegisterForm;