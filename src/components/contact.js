import React, { Component } from "react";
import "../../src/style/contact.scss"
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";
import ContactForm from "./contact-us";
// import Selfie from "../images/ric04.jpg"
import contactPagePicture from "../images/3d-christian-wallpaper-calvary-1152x864.jpg";

const Contact = () => {
    return (
        <div>
            <Banner />
            <Header />
            <div className="contact-title">
                Contact Us @ Web Christians
            </div>
            <hr width="80%" color="bisque" />
            <ContactForm /><br />
            <img src={contactPagePicture} alt="Bro. Ric" align='center' />
            <Footer />
        </div>
    )
}

export default Contact