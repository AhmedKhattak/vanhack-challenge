/** @jest-environment jsdom */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./";
import "@testing-library/jest-dom/extend-expect";

describe("Tests for the Button component(atom)", () => {
  it("Render a outline Button", () => {
    render(<Button label="test" variant="outline" onClick={() => {}} />);

    expect(screen.getByText(/test/i)).toHaveClass("button variant__outline");
  });
  it("Render a outline Button", () => {
    render(<Button label="test" variant="text" onClick={() => {}} />);

    expect(screen.getByText(/test/i)).toHaveClass("button variant__text");
  });
  it("Render a Button default", () => {
    render(<Button label="test" onClick={() => {}} />);

    expect(screen.getByText(/test/i)).toHaveClass("button");
  });
});
