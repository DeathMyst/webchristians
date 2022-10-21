import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="closing-trademark">
            <footer><br />
                <center>
                    <hr width="55%" />
                    <p className="closing-trademark">Copyright ⓒ {currentYear} Web Christians | All Rights Reserved</p>

                    <hr width="55%" />
                    <div className="closing-trademark">
                        <a href="https://www.facebook.com/webchristians" i className="fa-brands fa-facebook" /> &nbsp;| &nbsp;
                        <a href="https://www.linkedin.com/feed/" i className="fa-brands fa-linkedin" /> &nbsp;| &nbsp;
                        <i className="fa-brands fa-twitter" /> &nbsp;| &nbsp;
                        <i className="fa-brands fa-discord" />
                    </div><br />
                </center>
            </footer>
        </div>
    )
}

