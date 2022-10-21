import React from 'react'
import { NavLink } from "react-router-dom";

export default function () {
    return (
        <div>
            <div className="trending-header">
                Trending and Important Topics
            </div><br />
            <hr width="80%" color="#EAAC6F" />
            <div className="main-body-links">
                <div className="main-body-textlinks">
                    <div className="main-body-headers">
                        <div className="buttons">
                            <form action="r_road">
                                <button type="submit" value="Go to Google"> Romans Road
                                    <NavLink exact to="/r_road" activeClassName="nav-link-active"></NavLink>
                                    <i className="fa-solid fa-road" /><br />A Biblical Path to Salvation
                                </button>
                            </form>
                            <form action="one_way">
                                <button type="submit" value="Go to Google"> Only One Way
                                    <NavLink exact to="/one_way" activeClassName="nav-link-active"></NavLink>
                                    <i className="fa-solid fa-cross" /><br />The Christian Path to Salvation
                                </button>
                            </form>
                            <form action="worldly">
                                <button type="submit" value="Go to Google"> A Worldly Truth <i className="fa-solid fa-globe" />
                                    <NavLink exact to="/worldly" activeClassName="nav-link-active"></NavLink>
                                    <br />A Biblical Truth on Religions</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr width="80%" color="#EAAC6F" />
                <div className="main-body-links">
                    <div className="main-body-textlinks">
                        <div className="main-body-headers">
                            <div className="buttons">
                                <form action="truely">
                                    <button type="submit" value="Go to Google"> You Truly a Christian?
                                        <NavLink exact to="/truely" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-ankh"></i><br />Many will claim to be that really are not.</button>
                                </form>
                                <form action="athiest">
                                    <button type="submit" value="Go to Google"> Think Your Atheist?
                                        <NavLink exact to="/athiest" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-atom"></i><br />There really is No such thing!</button>
                                </form>
                                <form action="./abortion">
                                    <button type="submit" value="Go to Google"> Abortion
                                        <NavLink exact to="/abortion" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-person-pregnant"></i><br />What does the Bible Teach?</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="80%" color="#EAAC6F" />
                <div className="main-body-links">
                    <div className="main-body-textlinks">
                        <div className="main-body-headers">
                            <div className="buttons">
                                <form action="politics">
                                    <button type="submit" value=""><i className="fa-solid fa-democrat"></i> Politics
                                        <NavLink exact to="/politics" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-republican"></i><br />Truth about Politics and Religion.</button>
                                </form>
                                <form action="tithing">
                                    <button type="submit" value=""> Tithing
                                        <NavLink exact to="/tithing" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-sack-dollar"></i><br />What is the truth about Tithing!</button>
                                </form>
                                <form action="daily">
                                    <button type="submit" value=""> Daily Bible
                                        <NavLink exact to="/daily" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-book-bible"></i><br />Todays Daily Bible Reading.</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="80%" color="#EAAC6F" />
                <div className="main-body-links">
                    <div className="main-body-textlinks">
                        <div className="main-body-headers">
                            <div className="buttons">
                                <form action="journal">
                                    <button type="submit" value=""> Daily Journal
                                        <NavLink exact to="/journal" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-book-journal-whills"></i><br />Daily Journal on todays Bible Verses.</button>
                                </form>
                                <form action="study">
                                    <button type="submit" value=""> Bible Study
                                        <NavLink exact to="/study" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-school"></i><br />Indepth Bibly Study.</button>
                                </form>
                                <form action="messages">
                                    <button type="submit" value="">Messages
                                        <NavLink exact to="/messages" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-message"></i><br />Weekly Messages on Current Topics.</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="80%" color="#EAAC6F" />
                <div className="main-body-links">
                    <div className="main-body-textlinks">
                        <div className="main-body-headers">
                            <div className="buttons">
                                <form action="downloads">
                                    <button type="submit" value=""> Downloads
                                        <NavLink exact to="/downloads" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-download"></i><br />Recommended Downloads.</button>
                                </form>
                                <form action="support">
                                    <button type="submit" value=""> Support Us
                                        <NavLink exact to="/support" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-envelope"></i><br />Help Support our Ministry.</button>
                                </form>
                                <form action="church">
                                    <button type="submit" value=""> Find a Church
                                        <NavLink exact to="/church" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-church"></i><br />Find a Local Church</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="80%" color="#EAAC6F" />
                <div className="main-body-links">
                    <div className="main-body-textlinks">
                        <div className="main-body-headers">
                            <div className="buttons">
                                <form action="sermon">
                                    <button type="submit" value=""> Sermons
                                        <NavLink exact to="/sermon" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-users-rectangle"></i><br />Worth Listening to.</button>
                                </form>
                                <form action="prayer">
                                    <button type="submit" value=""> Prayer Requests
                                        <NavLink exact to="/prayer" activeClassName="nav-link-active"></NavLink>
                                        <i className="fa-solid fa-person-praying"></i><br />Prayer Requests.</button>
                                </form>
                                <form action="contact">
                                    <button type="submit" value=""> Contact Us
                                        <NavLink exact to="/contact" activeClassName="nav-link-active"></NavLink><i
                                            className=""></i><br /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
