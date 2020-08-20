import React from "react";
import "./App.scss";
import {Toolbar} from "./components/toolbar/toolbar";
import {BrowserRouter} from "react-router-dom";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <main>
                <Toolbar/>
            </main>
        </BrowserRouter>
    );
}

export default App;
