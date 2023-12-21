import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/app/components/contact";

describe("Contact", () => {
  test("renders contact component", () => {
    render(<Contact />);
    const contactElement = screen.getByTestId("contact");
    expect(contactElement).toBeInTheDocument();
  });

  test("renders contact title", () => {
    render(<Contact />);
    const titleElement = screen.getByText("Get in Touch");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders contact image", () => {
    render(<Contact />);
    const imageElement = screen.getByAltText("/");
    expect(imageElement).toBeInTheDocument();
  });

  test("renders contact name", () => {
    render(<Contact />);
    const nameElement = screen.getByText("Robert Mayo");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders contact profession", () => {
    render(<Contact />);
    const professionElement = screen.getByText("Front-End Developer");
    expect(professionElement).toBeInTheDocument();
  });

  test("renders contact description", () => {
    render(<Contact />);
    const descriptionElement = screen.getByText(
      "I am available for freelance or full-time positions. Contact me and lets talk."
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders LinkedIn icon", () => {
    render(<Contact />);
    const linkedinIcon = screen.getByTestId("linkedin-icon");
    expect(linkedinIcon).toBeInTheDocument();
  });

  test("renders GitHub icon", () => {
    render(<Contact />);
    const githubIcon = screen.getByTestId("github-icon");
    expect(githubIcon).toBeInTheDocument();
  });

  test("renders Mail icon", () => {
    render(<Contact />);
    const mailIcon = screen.getByTestId("mail-icon");
    expect(mailIcon).toBeInTheDocument();
  });

  // test("renders Person Lines icon", () => {
  //   render(<Contact />);
  //   const personLinesIcon = screen.getByTestId("person-lines-icon");
  //   expect(personLinesIcon).toBeInTheDocument();
  // });

  test("renders contact form", () => {
    render(<Contact />);
    const formElement = screen.getByTestId("contact-form");
    expect(formElement).toBeInTheDocument();
  });

  test("renders send message button", () => {
    render(<Contact />);
    const buttonElement = screen.getByText("Send Message");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders back to top button", () => {
    render(<Contact />);
    const backButtonElement = screen.getByTestId("back-to-top-button");
    expect(backButtonElement).toBeInTheDocument();
  });
});
