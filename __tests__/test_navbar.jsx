import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Navbar from "../src/app/components/navbar";

describe("Navbar", () => {
  test("renders navbar component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  test("renders home link", () => {
    render(<Navbar />);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("renders about link", () => {
    render(<Navbar />);
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
  });

  test("renders skills link", () => {
    render(<Navbar />);
    const skillsLink = screen.getByText("Skills");
    expect(skillsLink).toBeInTheDocument();
  });

  test("renders projects link", () => {
    render(<Navbar />);
    const projectsLink = screen.getByText("Projects");
    expect(projectsLink).toBeInTheDocument();
  });

  test("renders contact link", () => {
    render(<Navbar />);
    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
  });
});