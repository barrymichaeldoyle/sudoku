import React from "react";
import ReactDOM from "react-dom";

import { App, unregister } from "core";

ReactDOM.render(<App />, document.getElementById("root"));

unregister();
