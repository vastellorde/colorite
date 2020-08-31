import React, { FunctionComponent } from "react";
import "./footer.scss";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <span>Создание сайта</span>
          <span>Разработка дизайна</span>
          <span>Продвижение бизнеса</span>
          <span></span>
        </div>
        <span>Смотреть все услуги</span>
      </div>
    </footer>
  );
};
