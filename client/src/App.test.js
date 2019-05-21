import React from "react";
import App from "./App";

import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
    cleanup();
  });
});
