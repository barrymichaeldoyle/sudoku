import { GRID, NUMBERS } from "typings";

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
