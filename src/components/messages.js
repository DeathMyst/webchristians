import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../../src/style/h_tags.scss"
import Logo1 from "../images/logo1.gif"
const Messages = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h2>Weekly Messages</h2>
            <hr width="80%" color="#EAAC6F" />

            <hr width="80%" color="#EAAC6F" />
            <Footer />
        </div>
    )
}

export default Messages