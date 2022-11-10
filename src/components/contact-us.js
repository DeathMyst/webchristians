import React, { useState } from "react";

const FORM_ENDPOINT = "mailto:ricworstell@gmail.com"; // TODO - fill on the later step

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
        <form action="https://formsubmit.co/ricworstell@gmail.com" method="POST">
            <div className="contact-name">
                <input type="text" placeholder="Enter Your Name" name="name" required />
            </div>
            <div className="contact-email">
                <input type="email" placeholder="Your Email" name="email" required />
            </div>
            <div className="contact-message">
                <textarea placeholder="Your Message" name="message" required />
            </div>
            <div className="contact-submit">
                <button type="submit">Send Your Message</button>
            </div>
        </form>
    );
};

export default ContactForm;