import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../style/downloads.scss"
import "../../src/style/h_tags.scss"
import Esword from "../images/e_sword.gif"

const Downloads = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h2>Recommended Downloads</h2>
            <hr width="80%" color="#EAAC6F" />
            <div className="download-wrapper">
                <div className="download-left-wrapper">
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">
                        <img src={Esword} alt="E-Sword Bible Software" align='center' /><br />
                        <br />e-Sword v13.0.0 Install</a>
                </div>
                <div className="download-center-wrapper">
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">
                        <img src={Esword} alt="E-Sword Bible Software" align='center' /><br />
                        <br />e-Sword v13.0.0 Install</a>
                </div>
                <div className="download-right-wrapper">
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">
                        <img src={Esword} alt="E-Sword Bible Software" align='center' /><br />
                        <br />e-Sword v13.0.0 Install</a>
                </div>
                <br /><hr width="100%" color="#EAAC6F" /><br />
                <div className="download-left-wrapper">
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">
                        <img src={Esword} alt="E-Sword Bible Software" align='center' /><br />
                        <br />e-Sword v13.0.0 Install</a>
                </div>
                <div className="download-center-wrapper">
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">
                        <img src={Esword} alt="E-Sword Bible Software" align='center' /><br />
                        <br />e-Sword v13.0.0 Install</a>
                </div>
                <div className="download-right-wrapper">
                    <a href="files/e-sword_1300_setup.exe" class="button" data-icon="↓">
                        <img src={Esword} alt="E-Sword Bible Software" align='center' /><br />
                        <br />e-Sword v13.0.0 Install</a>
                </div>
                <br /><hr width="100%" color="#EAAC6F" /><br />
            </div>
            <Footer />
        </div>
    )
}

export default Downloads