import React from "react";
import { ChipProps } from "../../models/chip";
import "./chip.scss";

class Chip extends React.Component<ChipProps, any> {
  onClick = () => {
    const { id, nestedId, handleClick } = this.props;
    handleClick(id, nestedId);
  };

  render(): React.ReactNode {
    const { isChecked, children } = this.props;
    return (
      <button
        type="button"
        onClick={this.onClick}
        className={isChecked ? "active" : ""}
      >
        {children}
      </button>
    );
  }
}

export default Chip;
