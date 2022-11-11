import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../../src/style/h_tags.scss"
// import "../../src/style/sermon.scss"

const Sermon = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h2>Sermons</h2>
            <hr width="80%" color="#EAAC6F" />

            <hr width="80%" color="#EAAC6F" />
            <Footer />
        </div>
    )
}

export default Sermon