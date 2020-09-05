import React, { FunctionComponent } from "react";
import "./App.scss";
import { Toolbar } from "./components/toolbar/toolbar";
import { Footer } from "./components/footer/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from "./pages/index";
import { ServicesPage } from "./pages/services/services";
import { PortfolioPage } from "./pages/portfolio/portfolio";
import { Helmet } from "react-helmet";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Colorite</title>
        <meta
          name="description"
          content="Дизайн, разработка, и продвижение вашего продукта"
        />
      </Helmet>
      <main>
        <Toolbar />
        <Switch>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="about_us"></Route>
          <Route path="request"></Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
