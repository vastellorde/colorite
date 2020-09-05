import React from "react";
import { Chip } from "../chip/chip";

import "./brif.scss";

export class Brif extends React.Component<any, any> {
  state = {
    checkedChips: [0, 0],
  };
  handleChipClick = (index: number, nestedIndex: number) => {
    this.setState((prevState: Readonly<any>) => {
      const temp = [...prevState.checkedChips];
      temp[index] = nestedIndex;
      return { checkedChips: temp };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="brif">
          <div className="header">
            <div className="wrapper">
              <span className="collab">Сотрудничество</span>
              <span className="write">Заполнить бриф</span>
              <span className="need">Что вам нужно</span>
            </div>
            <div className="wrapper">
              <span className="title">Контакты</span>
              <div className="contacts">
                <a href="tel:+77711324449" className="contacts__data">
                  +7 (771) 132 44 49
                </a>
                <a
                  href="mailto: colorite-dev@mail.ru"
                  className="contacts__data"
                >
                  colorite-dev@mail.ru
                </a>
              </div>
            </div>
          </div>
          <div className="chips">
            <div className="what-need">
              <Chip
                isChecked={this.state.checkedChips[0] === 0}
                id={0}
                nestedId={0}
                handleClick={this.handleChipClick}
              >
                Создание сайта
              </Chip>
              <Chip
                isChecked={this.state.checkedChips[0] === 1}
                id={0}
                nestedId={1}
                handleClick={this.handleChipClick}
              >
                Разработка дизайна
              </Chip>
              <Chip
                isChecked={this.state.checkedChips[0] === 2}
                id={0}
                nestedId={2}
                handleClick={this.handleChipClick}
              >
                Продвижение бизнеса
              </Chip>
              <Chip
                isChecked={this.state.checkedChips[0] === 3}
                id={0}
                nestedId={3}
                handleClick={this.handleChipClick}
              >
                Другое
              </Chip>
            </div>
            <span className="cost__title">Ваш бюджет</span>
            <div className="cost">
              <Chip
                isChecked={this.state.checkedChips[1] === 0}
                id={1}
                nestedId={0}
                handleClick={this.handleChipClick}
              >
                Менее 400 USD
              </Chip>
              <Chip
                isChecked={this.state.checkedChips[1] === 1}
                id={1}
                nestedId={1}
                handleClick={this.handleChipClick}
              >
                400 — 600 USD
              </Chip>
              <Chip
                isChecked={this.state.checkedChips[1] === 2}
                id={1}
                nestedId={2}
                handleClick={this.handleChipClick}
              >
                600 — 1400 USD
              </Chip>
              <Chip
                isChecked={this.state.checkedChips[1] === 3}
                id={1}
                nestedId={3}
                handleClick={this.handleChipClick}
              >
                Более 1400 USD
              </Chip>
            </div>
          </div>
          <form>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="Имя" />
              </div>
              <div className="input">
                <input type="phone" placeholder="Телефон" />
              </div>
              <div className="input">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input">
              <textarea placeholder="Опишите вашу задачу"></textarea>
            </div>
            <button type="submit">
              Отправить<span className="blink">_</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
