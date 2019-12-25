import { BLOCK_COORDS, NORMALIZED_GRID } from 'typings'

export interface IReducer {
  grid?: NORMALIZED_GRID
  selectedBlock?: BLOCK_COORDS
}
