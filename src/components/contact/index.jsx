const ContactForm = () => {
    return (
        <div className="contact_form__container">
            <h2>LEAVE US A MESSAGE</h2>
            <div className="red_box" />

            <div style={{marginTop: "20px"}}>
            <span style={{marginTop: "10px"}}>There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
            </span>
            </div>

            <form action="">
                <input type="text"  placeholder="Name*"/><br />
                <input type="email"  placeholder="Email*"/><br />
                <input type="text"  placeholder="Phone*"/><br />
                <input type="text"  placeholder="Message*"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ContactForm;