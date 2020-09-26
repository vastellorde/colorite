import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Toolbar from "./components/toolbar/toolbar";
import Footer from "./components/footer/footer";
import IndexPage from "./pages/index";
import ServicesPage from "./pages/services/services";
import PortfolioPage from "./pages/portfolio/portfolio";

const App: React.FC = () => {
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
          <Route path="about_us" />
          <Route path="request" />
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
