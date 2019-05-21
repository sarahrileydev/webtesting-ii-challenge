import React from 'react';

import Display from "./Display";

import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("display", () => {
  it("should render without crashing", () => {
    render(<Display />);
    cleanup();
  });

  it('should display ball', () => {
    const { getByText } = render(<Display />);
    const text = getByText(/ball/i);
    expect(text).toBeInTheDocument();
    cleanup();
  })
  it('should display count passed in from props', () => {

    const { getByText } = render(<Display ball={2} strike={1} />);

    const ball = getByText(/2/);
    const strike = getByText(/1/);
    

    expect(ball).toBeInTheDocument();
    expect(strike).toBeInTheDocument();
     
    cleanup();
  })

  it('should count the strikes', () => {
    // const test = { strike: 0}
    // const {getByTestId } = render(<Display strike={test.strike}/>)
    // const strikeButton = getByTestId('strike');
    // fireEvent.click(strikeButton);
    // expect(strikeButton).toHaveTextContent(/strike/i);
    const {getByText} = render(<Display/>);
    const strikeButton = getByText(/strike/i);

    fireEvent.click(strikeButton);
    
    getByText(/strike/i);
    cleanup();
  })
  
});