import React from "react";

import "./portfolio.scss";
import { Brif } from "../../components/brif/brif";

export class PortfolioPage extends React.Component<any, any> {
  render() {
    return (
      <main>
        <div className="container">
          <div className="text">
            <span className="subtitle">Портфолио</span>
            <h1 className="title">
              Ваши бизнес-цели достигаются с помощью дизайна
              <span className="blink">_</span>
            </h1>
          </div>
          <div className="filters">
            <button className="btn">
              Все работы
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="btn">
              Веб разработка
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="btn">
              Продвижение
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="btn">
              Дизайн
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="divider"></div>
          <div className="projects">
            <div className="projects__item">
              <div className="info">
                <span className="info__subtitle">Веб разработка</span>
                <span className="info__title">
                  Создание сайта для дизайн школы
                </span>
              </div>
              <img
                className="img"
                src="FWVMhUa_wbY.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="projects__item">
              <div className="info">
                <span className="info__subtitle">Веб разработка</span>
                <span className="info__title">
                  Создание корпоративного сайта SPOT
                </span>
              </div>
              <img className="img" src="image_8.png" alt="" loading="lazy" />
            </div>
            <div className="projects__item">
              <div className="info">
                <span className="info__subtitle">Веб разработка</span>
                <span className="info__title">Создание многостраничника</span>
              </div>
              <img className="img" src="image_7.png" alt="" loading="lazy" />
            </div>
            <div className="projects__item">
              <div className="info">
                <span className="info__subtitle">Веб разработка</span>
                <span className="info__title">Создание многостраничника</span>
              </div>
              <img className="img" src="image_7.png" alt="" loading="lazy" />
            </div>
            <div className="projects__item">
              <div className="info">
                <span className="info__subtitle">Веб разработка</span>
                <span className="info__title">
                  Создание сайта для дизайн школы
                </span>
              </div>
              <img
                className="img"
                src="FWVMhUa_wbY.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="projects__item">
              <div className="info">
                <span className="info__subtitle">Веб разработка</span>
                <span className="info__title">
                  Создание корпоративного сайта SPOT
                </span>
              </div>
              <img className="img" src="image_8.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <Brif />
      </main>
    );
  }
}
