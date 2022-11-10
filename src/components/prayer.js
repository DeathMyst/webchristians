import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../style/prayer.scss"
import "../../src/style/h_tags.scss"

const Prayer = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h2>Prayer Requests</h2>
            <hr width="80%" color="bisque" />
            <center>Post a Prayer Request</center><br />
            <center>Read Prayer Requests</center><br />
            <hr width="80%" color="bisque" />
            <Footer />
        </div>
    )
}

export default Prayer