export type ChipProps = {
  isChecked: boolean;
  handleClick(index: number, nestedIndex: number): void;
  id: number;
  nestedId: number;
};
