import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../../src/style/h_tags.scss"

const Messages = () => {
    return (
        <div>
            <Banner />
            <Header />
            Messages
            <Footer />
        </div>
    )
}

export default Messages