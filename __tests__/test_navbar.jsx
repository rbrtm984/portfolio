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
    const homeLink = screen.getAllByText("Home");
    expect(homeLink.length).toEqual(2);
  });

  test("renders about link", () => {
    render(<Navbar />);
    const aboutLink = screen.getAllByText("About");
    expect(aboutLink.length).toEqual(2);
  });

  test("renders skills link", () => {
    render(<Navbar />);
    const skillsLink = screen.getAllByText("Skills");
    expect(skillsLink.length).toEqual(2);
  });

  test("renders projects link", () => {
    render(<Navbar />);
    const projectsLink = screen.getAllByText("Projects");
    expect(projectsLink.length).toEqual(2)
  });

  test("renders contact link", () => {
    render(<Navbar />);
    const contactLink = screen.getAllByText("Contact");
    expect(contactLink.length).toEqual(2);
  });
});