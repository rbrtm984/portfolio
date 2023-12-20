import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../src/app/components/projects";

describe("Projects", () => {
  test("renders projects component", () => {
    render(<Projects />);
    const projectsElement = screen.getByTestId("projects");
    expect(projectsElement).toBeInTheDocument();
  });

  test("renders project titles", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByTestId("project-item");
    expect(projectTitles).toHaveLength(4);
    expect(projectTitles[0]).toHaveTextContent("Ship Log");
    expect(projectTitles[1]).toHaveTextContent("Easy Court");
    expect(projectTitles[2]).toHaveTextContent("Social Hour");
    expect(projectTitles[3]).toHaveTextContent("Kaleidoscope");
  });

  test("renders project images", () => {
    render(<Projects />);
    const projectImages = screen.getAllByTestId("project-image");
    expect(projectImages).toHaveLength(4);
    expect(projectImages[0]).toHaveAttribute("src", "/_next/image?url=%2FshiplogImg.png&w=1920&q=75");
    expect(projectImages[1]).toHaveAttribute("src", "/_next/image?url=%2FeasyCourtImg.png&w=1920&q=75");
    expect(projectImages[2]).toHaveAttribute("src", "/_next/image?url=%2FsocialHourImg.png&w=1920&q=75");
    expect(projectImages[3]).toHaveAttribute("src", "/_next/image?url=%2FkaleidoscopeImg.png&w=1920&q=75");
  });

  test("renders project URLs", () => {
    render(<Projects />);
    const projectUrls = screen.getAllByTestId("project-url");
    expect(projectUrls).toHaveLength(4);
    expect(projectUrls[0]).toHaveAttribute("href", "/shiplog");
    expect(projectUrls[1]).toHaveAttribute("href", "/easycourt");
    expect(projectUrls[2]).toHaveAttribute("href", "/socialhour");
    expect(projectUrls[3]).toHaveAttribute("href", "/kaleidoscope");
  });
});