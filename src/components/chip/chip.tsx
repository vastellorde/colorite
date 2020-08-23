import React, { Component } from "react";
import { ChipProps } from "../../models/chip";
import "./chip.scss";

export class Chip extends Component<ChipProps, {}> {
  render() {
    return (
      <button
        onClick={this.onClick}
        className={this.props.isChecked ? "active" : ""}
      >
        {this.props.children}
      </button>
    );
  }

  onClick = () => {
    this.props.handleClick(this.props.id, this.props.nestedId);
  };
}
