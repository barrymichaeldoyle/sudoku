import React from "react";

import { createFullGrid } from "utils";

const App: React.FC = () => {
  const grid = createFullGrid();
  console.log({ grid });

  return <div>See console for generated sudoku grid</div>;
};

export default App;
