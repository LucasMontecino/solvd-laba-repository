import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  const mockHandleChange = vi.fn();
  const mockHandleClick = vi.fn();

  const defaultProps = {
    type: "text",
    value: "",
    handleChange: mockHandleChange,
    handleClick: mockHandleClick,
    name: "test-input",
  };

  it("should render input and button elements", () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should display the correct value in the input", () => {
    render(<Input {...defaultProps} value="test value" />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("test value");
  });

  it("should call handleChange when input value changes", () => {
    render(<Input {...defaultProps} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it("should call handleClick when the button is clicked", () => {
    render(<Input {...defaultProps} />);

    const buttonElement = screen.getByRole("button", { name: /add/i });

    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
