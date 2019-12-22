import React from "react";

import { createFullGrid } from "utils";

const App: React.FC = () => {
  const grid = createFullGrid();
  console.log({ grid });

  return <div className="App" />;
};

export default App;
