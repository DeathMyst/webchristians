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
            <h3>Contact Us @ Web Christians</h3>
            <div className="contact-title">
                <hr width="80%" color="bisque" />
                <center>
                    <ContactForm /><br />
                </center>
                <img src={contactPagePicture} alt="Bro. Ric" align='center' />
                <hr width="80%" color="bisque" />
            </div>
            <Footer />

        </div>
    )
}

export default Contact