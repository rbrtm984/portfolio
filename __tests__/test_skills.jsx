import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../src/app/components/skills";

describe("Skills", () => {
  test("renders skill images", () => {
    render(<Skills />);
    
    const htmlImage = screen.getByTestId("html-image");
    expect(htmlImage).toBeInTheDocument();

    const cssImage = screen.getByTestId("css-image");
    expect(cssImage).toBeInTheDocument();

    const javascriptImage = screen.getByTestId("javascript-image");
    expect(javascriptImage).toBeInTheDocument();

    const reactImage = screen.getByTestId("react-image");
    expect(reactImage).toBeInTheDocument();

    const tailwindImage = screen.getByTestId("tailwind-image");
    expect(tailwindImage).toBeInTheDocument();

    const githubImage = screen.getByTestId("github-image");
    expect(githubImage).toBeInTheDocument();

    const awsImage = screen.getByTestId("aws-image");
    expect(awsImage).toBeInTheDocument();

    const mongodbImage = screen.getByTestId("mongo-image");
    expect(mongodbImage).toBeInTheDocument();

    const nextjsImage = screen.getByTestId("nextjs-image");
    expect(nextjsImage).toBeInTheDocument();

    const nodejsImage = screen.getByTestId("node-image");
    expect(nodejsImage).toBeInTheDocument();
  });
});