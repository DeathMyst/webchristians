import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo1.png"

import "../style/base.scss"
import "../../src/style/h_tags.scss"

export default function Banner() {
  return (

    <div className="container">
      <div className="container left-side">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="container center-wrapper">
        <div className="container center-wrapper nav-links">
          <NavLink exact to="/" activeClassName="nav-link-active"> Home <i className="fa-solid fa-house-user" /></NavLink>
        </div>

        {/* <div className="container center-wrapper nav-links">
          <NavLink exact to="/members" activeClassName="nav-link-active"> Home <i className="fa-solid fa-house-user" /></NavLink>
        </div> */}

        <div className="container center-wrapper nav-links">
          <NavLink exact to="/about" activeClassName="nav-link-active"> About <i className="fa-solid fa-address-card" /></NavLink>
        </div>
        <div className="container center-wrapper nav-links">
          <NavLink exact to="/contact" activeClassName="nav-link-active"> Contact <i className="fa-solid fa-file-signature" /></NavLink>
        </div>
      </div>

      <div className="right-wrapper">
        <div className="buttons">
          <form action="support"><button type="submit"> Support Us
            <NavLink exact to="/support" activeClassName="nav-link-active">
            </NavLink>
            <i className="fa-solid fa-money-check-dollar"></i></button></form>
          <form action="sign-up"><button type="submit"> Sign Up
            <NavLink exact to="/sign-up" activeClassName="nav-link-active">
            </NavLink>
            <i className="fa-solid fa-user-plus"></i></button></form>
          <form action="login"><button type="submit"> Login
            <NavLink exact to="login" activeClassName="nav-link-active">
            </NavLink>
            <i className="fa-solid fa-bridge"></i></button></form>
        </div>
      </div>
    </div>

  )
}

