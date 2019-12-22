export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW];

export type N = 0 | NUMBERS;

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ROW = [N, N, N, N, N, N, N, N, N];

export type SQUARE = [SQUARE_ROW, SQUARE_ROW, SQUARE_ROW];

export type SQUARE_ROW = [N, N, N];
