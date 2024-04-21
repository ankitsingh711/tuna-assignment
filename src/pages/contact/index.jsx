import React, { Component } from "react";
import ImgBurger from '../../assets/png/contact_page_img.png';
import ContactForm from "../../components/contact";

class Contact extends Component {
    
    render() {
        return (
            <div className="contact_main__container">
                <div className="contact_from_section">
                    <ContactForm />
                </div>
                <div className="img__section_contact">
                    <img src={ImgBurger} alt="burgerimg" />
                </div>
            </div>
        );
    }
}

export default Contact;
