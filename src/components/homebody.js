import React from 'react'
import { NavLink } from "react-router-dom";

import "../style/base.scss"
import "../../src/style/h_tags.scss"

export default function () {
    return (
        <div>
            <div className="trending-header">
                <h2>Trending and Important Topics</h2>
            </div>
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
            </div>
        </div>
    )
}
