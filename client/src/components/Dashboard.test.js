import React from "react";

import Dashboard from "./Dashboard";

import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

describe("dashboard", () => {
  it("should render without crashing", () => {
    render(<Dashboard />);
    cleanup();
  });

  
});
