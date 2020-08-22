import React, {FunctionComponent} from 'react';
import './toolbar.scss';
import {Link} from "react-router-dom";

export const Toolbar: FunctionComponent = () => {
    return (
        <div className="container">
            <header className="toolbar">
            <span className="logo">
                <span>
                    Color
                </span>
                <span>
                    ite
                </span>
                <span className="blink">]</span>
            </span>
                <ul>
                    <li>
                        <Link to="" className="link">Услуги</Link>
                    </li>
                    <li>
                        <Link to="" className="link">Портфолио</Link>
                    </li>
                    <li>
                        <Link to="" className="link">О нас</Link>
                    </li>
                    <li>
                        <Link to="" className="btn">
                            Оставить заявку <span className="blink">_</span>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}
