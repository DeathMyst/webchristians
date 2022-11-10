import React from "react";
import { NavLink } from "react-router-dom";

import Banner from "./Banner";
import Header from "./header";
import Homebody from "./homebody";
import Footer from "./footer";

import "../../src/style/h_tags.scss"

const currentYear = new Date().getFullYear();

export default function () {
    return (
        <center>
            <Banner />
            <Header />
            <Homebody />
            <Footer />
        </center>
    )
}

