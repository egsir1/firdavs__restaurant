import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "./container";
import { Navbar, Newsletter } from "./components";
import "./App.css";
import Reservation from "./container/Reservation/Reservation";
import AboutusDetail from "./container/AboutUs/AboutusDetail";
import Faqs from "./container/AboutUs/Faqs";
import Comments from "./components/comments/Comments";

const App = () => (
  <div>
    <Navbar />

    <Switch>
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/reservation">
        <Reservation />
      </Route>
      <Route path="/menu">
        <SpecialMenu />
      </Route>
      <Route path="/login">
        <Newsletter />
      </Route>
      <Route path="/comments">
        <Comments />
      </Route>

      <Route path="/aboutusdetail">
        <AboutusDetail />
      </Route>

      <Route path="/faqs">
        <Faqs />
      </Route>
      <AboutUs />
    </Switch>
    <Chef />
    <Intro />

    <Gallery />
    <FindUs />

    <Footer />
  </div>
);

export default App;
