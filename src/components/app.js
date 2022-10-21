import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "../../src/style/base.scss"

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Sermon from "./sermon";
import Login from "./login";
import Signup from "./sign-up";
import Prayer from "./prayer";
import Abortion from "./abortion";
import R_Road from "./r_road";
import Athiest from "./athiest";
import One_Way from "./one_way";
import Worldly from "./worldly";
import Truely from "./truely";
import Politics from "./politics";
import Tithing from "./tithing";
import Daily from "./daily";
import Journal from "./journal";
import Weekly from "./weekly";
import Messages from "./messages";
import Study from "./study";
import Downloads from "./downloads";
import Support from "./support";
import Church from "./church";

export default function () {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Prayer" component={Prayer} />
        <Route path="/contact" component={Contact} />
        <Route path="/sermon" component={Sermon} />
        <Route path="/abortion" component={Abortion} />
        <Route path="/Login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/r_road" component={R_Road} />
        <Route path="/athiest" component={Athiest} />
        <Route path="/one_way" component={One_Way} />
        <Route path="/worldly" component={Worldly} />
        <Route path="/truely" component={Truely} />
        <Route path="/politics" component={Politics} />
        <Route path="/tithing" component={Tithing} />
        <Route path="/daily" component={Daily} />
        <Route path="/journal" component={Journal} />
        <Route path="/weekly" component={Weekly} />
        <Route path="/messages" component={Messages} />
        <Route path="/study" component={Study} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/support" component={Support} />
        <Route path="/church" component={Church} />
      </Switch>
    </Router>

  );
}
