import React, { useState } from "react";
import "./toolbar.scss";
import { Link } from "react-router-dom";

const Toolbar: React.FC = () => {
  const [active, setActive] = useState(false);

  const onBurgerClick = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <header className="toolbar">
        <Link to="/" className="logo">
          <span>Color</span>
          <span>ite</span>
          <span className="blink">]</span>
        </Link>
        <ul>
          <li>
            <Link to="/services" className="link">
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="link">
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
          type="button"
          onClick={onBurgerClick}
          className={active ? "burger open" : "burger"}
        >
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
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

export default Toolbar;
