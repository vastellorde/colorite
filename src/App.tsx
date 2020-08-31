import React, { FunctionComponent } from "react";
import "./App.scss";
import { Toolbar } from "./components/toolbar/toolbar";
import { Footer } from "./components/footer/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from "./pages/index";
import { ServicesPage } from "./pages/services/services";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <main>
        <Toolbar />
        <Switch>
          <Route path="">
            <IndexPage />
          </Route>
          <Route path="services">
            <ServicesPage />
          </Route>
          <Route path="portfolio"></Route>
          <Route path="about_us"></Route>
          <Route path="request"></Route>
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
