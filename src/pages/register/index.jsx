import React, { Component } from "react";
import LogInImg from '../../assets/png/login_form.png';
import RegisterForm from "../../components/register";

class Register extends Component {
    
    render() {
        return (
            <div className="contact_main__container">
                <div className="contact_from_section">
                    <RegisterForm />
                </div>
                <div className="img__section_contact">
                    <img src={LogInImg} alt="burgerimg" />
                </div>
            </div>
        );
    }
}

export default Register;
