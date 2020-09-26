import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <span>Создание сайта</span>
          <span>Разработка дизайна</span>
          <span>Продвижение бизнеса</span>
          <span />
        </div>
        <span>Смотреть все услуги</span>
      </div>
    </footer>
  );
};

export default Footer;
