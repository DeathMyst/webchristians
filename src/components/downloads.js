import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../style/downloads.scss"
import "../../src/style/h_tags.scss"

const Downloads = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h2>Recommended Downloads</h2>
            <hr width="80%" color="#EAAC6F" />
            <div className="download-wrapper">
                <div className="download-left-wrapper">
                    <h2>E-SWORD</h2>
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">e-Sword v13.0.0 Install<span><br />56.9 MB, updated 03-26-2021</span></a>
                    <br />e-Sword v13.0.0 Install
                </div>
                <div className="download-center-wrapper">
                    <h2>E-SWORD</h2>
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">e-Sword v13.0.0 Install<span><br />56.9 MB, updated 03-26-2021</span></a>
                    <br />e-Sword v13.0.0 Install
                </div>
                <div className="download-right-wrapper">
                    <h2>E-SWORD</h2>
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">e-Sword v13.0.0 Install<span><br />56.9 MB, updated 03-26-2021</span></a>
                    <br />e-Sword v13.0.0 Install
                </div>
                <br /><hr width="100%" color="#EAAC6F" /><br />
                <div className="download-left-wrapper">
                    <h2>E-SWORD</h2>
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">e-Sword v13.0.0 Install<span><br />56.9 MB, updated 03-26-2021</span></a>
                    <br />e-Sword v13.0.0 Install
                </div>
                <div className="download-center-wrapper">
                    <h2>E-SWORD</h2>
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">e-Sword v13.0.0 Install<span><br />56.9 MB, updated 03-26-2021</span></a>
                    <br />e-Sword v13.0.0 Install
                </div>
                <div className="download-right-wrapper">
                    <h2>E-SWORD</h2>
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">e-Sword v13.0.0 Install<span><br />56.9 MB, updated 03-26-2021</span></a>
                    <br />e-Sword v13.0.0 Install
                </div>
                <br /><hr width="100%" color="#EAAC6F" /><br />
            </div>
            <Footer />
        </div>
    )
}

export default Downloads