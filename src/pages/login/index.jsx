import React, { Component } from "react";
import LogInImg from '../../assets/png/login_form.png';
import LogInForm from "../../components/login";
import RegisterForm from "../../components/register";

class LogIn extends Component {
    
    render() {
        return (
            <div className="contact_main__container">
                <div className="contact_from_section">
                    {/* <LogInForm /> */}
                    <RegisterForm />
                </div>
                <div className="img__section_contact">
                    <img src={LogInImg} alt="burgerimg" />
                </div>
            </div>
        );
    }
}

export default LogIn;
