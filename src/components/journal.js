import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../../src/style/h_tags.scss"
import "../../src/style/journal.scss"

const Journal = () => {
    return (
        <div>
            <Banner />
            <Header />
            <div className="journal-wrapper">
                <h2>Daily Journal</h2>
                <hr width="80%" color="#EAAC6F" /><br />
                <h3>Still working on the website.  Hope to have more to add and to complete many of the pages soon.
                    Please check back later for more information and more options.</h3>
                <hr width="80%" color="#EAAC6F" /><br />
            </div>
            <Footer />
        </div>
    )
}

export default Journal