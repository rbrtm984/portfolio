import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../src/app/components/about";

describe("About", () => {
  test("renders about component", () => {
    render(<About />);
    const aboutElement = screen.getByText("About");
    expect(aboutElement).toBeInTheDocument();
  });

  test("renders description paragraphs", () => {
    render(<About />);
    const descriptionParagraphs = screen.getAllByText(/I remember/);
    expect(descriptionParagraphs.length).toEqual(1);
  });

  test("renders project link", () => {
    render(<About />);
    const projectLink = screen.getByText(
      "Check out some of my latest projects."
    );
    expect(projectLink).toBeInTheDocument();
  });

  test("renders image", () => {
    render(<About />);
    const imageElement = screen.getByAltText("");
    expect(imageElement).toBeInTheDocument();
  });
});
