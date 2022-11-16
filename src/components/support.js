import React from 'react'
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../../src/style/h_tags.scss"

const Support = () => {
    return (
        <div>
            <Banner />
            <Header />
            <h2>Support Us</h2>
            <hr width="80%" color="#EAAC6F" />
            <h3>Like most non-profit organizations we rely on the support and generosity of others.  <br />
                There are many things that we need help with.
                <ol>
                    <li>Filing for business license.</li>
                    <li>Filing for Non-Profit Status.</li>
                    <li>Website hosting and development.</li>
                    <li>Helping Missions and Church Planting.</li>
                    <li>Content Development and Equipment.</li>
                    <li>Bibles for disbursment and soul winning.</li>
                    <li>General Monthly Expenses and Fee's.</li>
                </ol>
            </h3>
            <center><br /><br />
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="S2SMHZDHNLPZC" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </center>
            <hr width="80%" color="#EAAC6F" />

            <h3>Or send your donation check/Money Orders to: <br /><br />

                Web Christians Internet Ministries<br />
                P.O. Box <br />
                Carson City, Nevada 89703</h3><br />
            <hr width="80%" color="#EAAC6F" />
            <Footer />
        </div>
    )
}

export default Support