import React, { Component } from "react";
import { ChipState } from "../../models/chip";
import "./chip.scss";

export class Chip extends Component<{}, ChipState> {
  state: ChipState = {
    isChecked: false,
  };
  render() {
    return (
      <button
        onClick={this.onClick}
        className={this.state.isChecked ? "active" : ""}
      >
        {this.props.children}
      </button>
    );
  }

  onClick = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
}
