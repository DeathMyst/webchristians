import React from 'react'

import "../../src/style/about.scss"
import "../../src/style/h_tags.scss"

import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import Selfie from "../images/ric04.jpg"
import Navy3 from "../images/ric_navy3.jpg"

import { HTML5_FMT } from 'moment/moment';

const About = () => {
    return (
        <div>
            <Banner />
            <Header />
            <center>
                <div className="about-grid">
                    <div>
                        <center>
                            <hr width="80%" color="#EAAC6F" /><br /><br />
                            <img src={Selfie} alt="Bro. Ric" align='center' /><br /><br />
                            Back when I was at Faith Baptist Church
                            <hr width="80%" color="#EAAC6F" /><br /><br />
                            <img src={Navy3} alt="Bro. Ric" align='center' /><br /><br />
                            WAY Back when I was RPOC In Navy Basic Training
                            <hr width="80%" color="#EAAC6F" /><br /><br />
                        </center>
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
                        College of America.<br /><br />
                        <hr width="100%" color="#EAAC6F" /><br />
                        <h3>Attended Baptist College of America 2003 - 2014</h3>
                        I still have a few courses I need to take to finish out my degree, but I know enough to know that I am held
                        accountable for everything I post here. Everything posted here is directly from the Word of God.  I am not
                        posting my personal beliefs or thoughts, I am posting what God has written Himself in His Holy Bible.  I will
                        NOT post it here unless there are proofs in scripture that backup everything I post.  You may not agree with all
                        that I post here but thats for you to study scripture and try to find proofs that anything I post here is not
                        correct.  Not from your opinion but from scripture, without twisting it to your meaning but keeping it with God's.<br /><br />

                        It is NOT my intention to offend anyone with anything I post here, to the contrary, it is my intention to teach
                        God's truth and to bring His Word to the people, as He commands us to do.  I know that much of what i will say here
                        will offend people and I am sorry for that, but instead of killing the messanger, try to prove me wrong on any point
                        I bring up here.  I know many preachers out there twist and turn God's word to try to prove their OPINION on a matter,
                        but I give it to you just as it is, just as Gods Word teaches it.  I will never preach to itching ears or change what
                        or how I teach to please any man, I preach to please God, not man.  If my words here convict you in your heart, then
                        GOOD, thats what they are meant to do.  Its God's Words that are convicting you, not mine.  But the truth is the truth,
                        you cannot believe differently from God's Word and still consider yourself a Christian.  Remember, there will be many
                        that will stand before Jesus saying 'didn't we preach in your name, didn't we cast out demons in your name' and Jesus
                        will say to them 'depart from me you wicked for I know you not!' Stop twisting God's word to meet YOUR wishes or YOUR
                        interpretation.  Even a 6th grader knows the meanings of most of God's Word without having to twist it to their own
                        hearts.  To be a true Christian means that you strive to be Christ Like, NOT that you try to make Christ in YOUR image.
                        God is the same yesterday, today and forever.  What He said and meant 5000 years ago means the same today and it will
                        mean the same in the Millenial Kingdom to come. God changes NOT.<br /><br />
                        <hr width="100%" color="#EAAC6F" /><br />
                    </div>
                </div>

                <Footer />
            </center>
        </div>
    )
}

export default About