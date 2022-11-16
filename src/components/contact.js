import React, { Component } from "react";
import "../../src/style/contact.scss"

import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";
import ContactForm from "./contact-us";

import contactPagePicture from "../images/3d-christian-wallpaper-calvary-1152x864.jpg";
import Contact_God from "../images/adam.jpg";

const Contact = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h3>Contact Us @ Web Christians</h3>
            <div className="contact-title">
                <hr width="80%" color="bisque" />
                <center>
                    <img src={Contact_God} alt="Contact" />
                    <ContactForm /><br />
                    <img src={contactPagePicture} alt="Contact" />
                </center>
                <hr width="80%" color="bisque" />
            </div>
            <Footer />

        </div>
    )
}

export default Contact