import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectItem from "../src/app/components/projectitem";

describe("ProjectItem", () => {
  const mockTitle = "Sample Project";
  const mockBackgroundImg = "/sample-image.jpg";
  const mockProjectUrl = "/sample-url";

  test("renders project item component with correct title", () => {
    render(
      <ProjectItem
        title={mockTitle}
        backgroundImg={mockBackgroundImg}
        projectUrl={mockProjectUrl}
      />
    );
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders project item component with correct background image", () => {
    render(
      <ProjectItem
        title={mockTitle}
        backgroundImg={mockBackgroundImg}
        projectUrl={mockProjectUrl}
      />
    );
    const imageElement = screen.getByAltText("");
    expect(imageElement).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fsample-image.jpg&w=1920&q=75"
    );
  });

  test("renders project item component with correct project URL", () => {
    render(
      <ProjectItem
        title={mockTitle}
        backgroundImg={mockBackgroundImg}
        projectUrl={mockProjectUrl}
      />
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockProjectUrl);
  });
});
