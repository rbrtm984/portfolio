import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../src/app/components/main";

describe("Main", () => {
  test("renders main component", () => {
    render(<Main />);
    const mainElement = screen.getByText("Let's do it");
    expect(mainElement).toBeInTheDocument();
  });

  test("renders name", () => {
    render(<Main />);
    const nameElement = screen.getByText("Hi, I'm");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders profession", () => {
    render(<Main />);
    const professionElement = screen.getByText("A Full Stack Web Developer");
    expect(professionElement).toBeInTheDocument();
  });

  test("renders description paragraph", () => {
    render(<Main />);
    const descriptionParagraph = screen.getByText(/I'm a full/);
    expect(descriptionParagraph).toBeInTheDocument();
  });

  test("renders LinkedIn icon", () => {
    render(<Main />);
    const linkedinIcon = screen.getByTestId("linkedin-icon");
    expect(linkedinIcon).toBeInTheDocument();
  });

  test("renders GitHub icon", () => {
    render(<Main />);
    const githubIcon = screen.getByTestId("github-icon");
    expect(githubIcon).toBeInTheDocument();
  });

  test("renders Mail icon", () => {
    render(<Main />);
    const mailIcon = screen.getByTestId("mail-icon");
    expect(mailIcon).toBeInTheDocument();
  });

  // test("renders Person Lines icon", () => {
  //   render(<Main />);
  //   const personLinesIcon = screen.getByTestId("person-lines-icon");
  //   expect(personLinesIcon).toBeInTheDocument();
  // });
});