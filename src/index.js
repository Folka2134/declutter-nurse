import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/tailwind.css";

import Landing from "views/Landing.js";
import Services from "views/Services.js";
import About from "views/About.js";
import Testimonals from "views/Testimonials.js";
import Profile from "views/Profile.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/testimonals" exact component={Testimonals} />
      <Route path="/profile" exact component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
