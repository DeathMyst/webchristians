import React from 'react'

import "../../src/style/about.scss"
import "../../src/style/h_tags.scss"

import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import Selfie from "../images/ric04.jpg"
import { HTML5_FMT } from 'moment/moment';

const About = () => {
    return (
        <div>
            <Banner />
            <Header />
            <center>
                <div className="about-grid">
                    <div>
                        <img src={Selfie} alt="Bro. Ric" align='center' />
                    </div>
                    <div>
                        <h2>Bro. Ric Worstell</h2>
                        <hr width="100%" color="#EAAC6F" />
                        <h3>Baptized 9/28/1967 <br /> First Baptist Church <br />O'fallon Illinois</h3>
                        <hr width="100%" color="#EAAC6F" /><br />
                        While my father and mother were both saved as children, they did not take or send us to church,
                        ever.  My first experience with church was when my step-mother, Barbara, started sending us to
                        First Baptist Church on Sunday mornings.  I was nine years old at that time.  She also sent us
                        to a Catholic church in O'Fallon a few times but all that pomp and ceremony never really set-in
                        or felt right.  It was during a Revival that First Baptist Church was holding that it really hit
                        me that I was a sinner and that God was not only calling me to salvation, but calling me to serve
                        Him.  Things happened in my life after that that should have put me into prison, but God is good
                        and He watched out for me in more ways and at more times than I can count.  Its where i also learned
                        the hard way not to listen to gossip. I was accused of many things I did not do but again God is good and
                        used evil for good and set my feet upon another path.  A Path that led me eventually to Faith Baptist Church
                        in Silver Springs, Nevada.<br /><br />
                        <hr width="100%" color="#EAAC6F" />
                        <h3>Ordained 12/15/2004 <br /> Faith Baptist Church <br />Silver Springs Nevada</h3>
                        <hr width="100%" color="#EAAC6F" /><br />
                        It was through my children that God led me to FBC and it did not take long before i once again felt God's
                        call for me to serve Him.  I started out doing all the Computer work there are FBC but soon was helping out
                        in the capacity of youth pastor and assistant pastor. I was never given the actual titles but did the jobs
                        none-the-less.  This is when I learned that titles really dont mean anything to God, its what you do and how
                        you serve that matters to Him.  Seek your glory in Heaven and NOT on this earth. I also started serving as
                        the School Principle for grades 3 through 12 and setup the AOE Cirriculum that the school started using at
                        that time. This is also when my pastor convinced me to go to Bible College. So we packed up the family and
                        headed to Hyles Anderson Baptist College.  I had already been taking courses for a few years through Baptist
                        College of America.
                        <hr width="100%" color="#EAAC6F" /><br />
                    </div>
                </div>

                <Footer />
            </center>
        </div>
    )
}

export default About