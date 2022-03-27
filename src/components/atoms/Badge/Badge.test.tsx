/** @jest-environment jsdom */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./";
import "@testing-library/jest-dom/extend-expect";

describe("Tests for the badge component(atom)", () => {
  it("Render a outline badge", () => {
    render(<Badge title="test" variant="outline" />);

    expect(screen.getByText(/test/i)).toHaveClass("badge variant__outline");
  });
  it("Render a outline text", () => {
    render(<Badge title="test" variant="text" />);

    expect(screen.getByText(/test/i)).toHaveClass("badge variant__text");
  });
  it("Render a outline default", () => {
    render(<Badge title="test" />);

    expect(screen.getByText(/test/i)).toHaveClass("badge");
  });
});
