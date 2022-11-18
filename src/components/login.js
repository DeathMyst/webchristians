import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";

import "../../src/style/h_tags.scss"
import "../../src/style/login.scss"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pword1: "",
            hasLogged: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();

        let data = {
            email: this.state.email,
            pword1: this.state.pword1,
        }

        axios
            .post('https://webchrictiansbackend.herokuapp.com/login', data)

            .then(response => {
                console.log(response);

                if (response.status === 200) {
                    this.setState({
                        hasLogged: true,
                    })
                }

            }).catch(error => {
                console.error(error)
            });

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Banner />
                <Header />
                <div className="login-title">
                    <h3>Login to Web Christians</h3>
                </div>
                <hr width="80%" color="bisque" />
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <input style={{ width: "350px" }} onChange={this.handleChange} type="text" placeholder="Enter Your Email" name="email" /><br />
                        <input style={{ width: "350px" }} onChange={this.handleChange} type="password" placeholder="Enter your password" name="pword1" /><br /><br />
                        <div className="saveit">
                            <div className="buttons">
                                <button type="submit"> Login  </button>
                            </div>
                        </div>
                    </center>
                </form>
                {this.state.hasLogged && <Redirect to="/members" />}
                <Footer />
            </div>
        )
    }
}
