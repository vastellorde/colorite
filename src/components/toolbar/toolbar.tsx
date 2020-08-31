import React, { FunctionComponent, useState } from "react";
import "./toolbar.scss";
import { Link } from "react-router-dom";

export const Toolbar: FunctionComponent = () => {
  const [active, setActive] = useState(false);

  const onBurgerClick = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <header className="toolbar">
        <span className="logo">
          <span>Color</span>
          <span>ite</span>
          <span className="blink">]</span>
        </span>
        <ul>
          <li>
            <Link to="/services" className="link">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="" className="link">
              Портфолио
            </Link>
          </li>
          <li>
            <Link to="" className="link">
              О нас
            </Link>
          </li>
          <li>
            <Link to="" className="btn">
              Оставить заявку <span className="blink">_</span>
            </Link>
          </li>
        </ul>
        <button
          onClick={onBurgerClick}
          className={active ? "burger open" : "burger"}
        >
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </button>
      </header>
      <div className={active ? "menu open" : "menu"}>
        <ul>
          <li>
            <Link to="services" className="link">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="" className="link">
              Портфолио
            </Link>
          </li>
          <li>
            <Link to="" className="link">
              О нас
            </Link>
          </li>
          <li>
            <Link to="" className="link">
              Оставить заявку
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
