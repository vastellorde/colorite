import React, {FunctionComponent} from "react";
import "./App.scss";
import {Toolbar} from "./components/toolbar/toolbar";
import {BrowserRouter} from "react-router-dom";

export const App: FunctionComponent = () =>  {
    return (
        <BrowserRouter>
            <main>
                <Toolbar/>
            </main>
        </BrowserRouter>
    );
}
