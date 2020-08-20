import React, {FunctionComponent} from "react";
import "./App.scss";
import {Toolbar} from "./components/toolbar/toolbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {IndexPage} from "./pages/index";

export const App: FunctionComponent = () =>  {
    return (
        <BrowserRouter>
            <main>
                <Toolbar/>
                <Switch>
                    <Route path="">
                        <IndexPage />
                    </Route>
                    <Route path="services"></Route>
                    <Route path="portfolio"></Route>
                    <Route path="about_us"></Route>
                    <Route path="request"></Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}
