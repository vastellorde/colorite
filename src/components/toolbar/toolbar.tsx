import React, { FunctionComponent } from "react";
import "./toolbar.scss";
import { Link } from "react-router-dom";

export const Toolbar: FunctionComponent = () => {
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
            <Link to="" className="link">
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
        <button className="burger">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7333 18.6667H5.26667C4.56711 18.6667 4 19.2338 4 19.9333V20.0667C4 20.7662 4.56711 21.3333 5.26667 21.3333H26.7333C27.4329 21.3333 28 20.7662 28 20.0667V19.9333C28 19.2338 27.4329 18.6667 26.7333 18.6667Z"
              fill="black"
            />
            <path
              d="M26.7333 10.6667H5.26667C4.56711 10.6667 4 11.2338 4 11.9333V12.0667C4 12.7662 4.56711 13.3333 5.26667 13.3333H26.7333C27.4329 13.3333 28 12.7662 28 12.0667V11.9333C28 11.2338 27.4329 10.6667 26.7333 10.6667Z"
              fill="black"
            />
          </svg>
        </button>
      </header>
    </div>
  );
};
