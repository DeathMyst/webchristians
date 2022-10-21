import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";
import R_Roadpic from "../images/r_road.jpg"

export default function () {
    return (
        <div>
            <Banner />
            <Header />
            <center><img src={R_Roadpic} alt="Romans Road to Salvation" /></center>
            <Footer />
        </div>

    )
}
