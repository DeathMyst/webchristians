import React, { useState } from "react";

import "../../src/style/contact.scss"

const FORM_ENDPOINT = "mailto:ricworstell@gmail.com";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </div>
        );
    }

    return (
        <center>
            <form action="https://formsubmit.co/ricworstell@gmail.com" method="POST">
                <hr width="35%" color="bisque" />
                <div className="contact-name">Enter Your Name&nbsp;:<br />
                    <input style={{ width: "350px" }} type="text" placeholder="Name" name="name" required />
                </div>
                <div className="contact-email">Enter Your Email :<br />
                    <input style={{ width: "350px" }} type="email" placeholder="Email" name="email" required />
                </div>
                <div className="contact-message">Enter Your Message :<br />
                    <textarea style={{ width: "400px", height: "100px" }} placeholder="Message" name="message" required />
                </div>
                <hr width="35%" color="bisque" />
                <div className="contact-submit">
                    <button type="submit">Send Your Message</button>
                </div>
            </form>
        </center>
    );
};

export default ContactForm;