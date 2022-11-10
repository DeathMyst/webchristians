import React from 'react'

import "../style/heading.scss"

import Cross from "../images/magicut_1656965367477.png"
import Tears from "../images/jesus_dryin_ur_tears.jpg"

const Header = () => {
    return (
        <header>
            <div className="main-body-heading">
                <div className="main-opening-heading">
                    <div><img src={Tears} alt="Jesus Dries Your Tears" /></div>
                    <div className="opening-heading-text">
                        <hr width="85%" color="#EAAC6F" />
                        <i className="fa-solid fa-door-open" /> Web Christians <i className="fa-solid fa-cross" />
                        Internet Ministries <i className="fa-solid fa-globe" /><br />
                        <p>Bro. Ric Worstell | Baptized 9/28/1967 | Ordained 12/15/2004 <br />
                            Graduated Bible College 05/03/2013<br />
                            Mark 16:15 - 'And He said unto them, Go ye into all the world,<br /> and preach the gospel to every creature.'</p>

                        <hr width="85%" color="#EAAC6F" />
                    </div>
                    <img src={Cross} alt="Cross" />
                </div>
            </div>

        </header >
    )
}

export default Header