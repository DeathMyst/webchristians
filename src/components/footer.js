import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="closing-trademark">
            <footer><br />
                <center>
                    <hr width="28%" />
                    <p className="closing-trademark">Copyright ⓒ 1996 - {currentYear} Web Christians | All Rights Reserved</p>

                    <hr width="28%" />
                    <div className="closing-trademark">
                        <a href="https://www.facebook.com/webchristians"> <i className="fa-brands fa-facebook" /></a> &nbsp;| &nbsp;
                        <a href="https://www.linkedin.com/feed/"> <i className="fa-brands fa-linkedin" /></a> &nbsp;| &nbsp;
                        <i className="fa-brands fa-twitter" /> &nbsp;| &nbsp;
                        <i className="fa-brands fa-discord" />
                    </div><br />
                    <hr width="80%" />
                </center>
                <center><h7>All verses within this website will be King James Version (KJV) Verses Only</h7></center><br /><br />
            </footer>
        </div>
    )
}

