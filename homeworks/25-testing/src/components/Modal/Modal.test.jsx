import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "./Modal";
import { describe, it, expect, vi } from "vitest";

describe("Modal Component", () => {
  const editItem = { id: 1, item: "Test Item" };
  const handleUpdate = vi.fn();
  const closeModal = vi.fn();

  it("renders the modal with the correct initial input value", () => {
    render(
      <Modal
        editItem={editItem}
        handleUpdate={handleUpdate}
        closeModal={closeModal}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe(editItem.item);
  });

  it("updates the input value when changed", () => {
    render(
      <Modal
        editItem={editItem}
        handleUpdate={handleUpdate}
        closeModal={closeModal}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Item" } });

    expect(input.value).toBe("Updated Item");
  });

  it("calls handleUpdate and closeModal when save button is clicked", () => {
    render(
      <Modal
        editItem={editItem}
        handleUpdate={handleUpdate}
        closeModal={closeModal}
      />
    );

    const saveButton = screen.getByText("✅");
    fireEvent.click(saveButton);

    expect(handleUpdate).toHaveBeenCalledWith(editItem.id, "Test Item");
    expect(closeModal).toHaveBeenCalled();
  });

  it("calls closeModal when cancel button is clicked", () => {
    render(
      <Modal
        editItem={editItem}
        handleUpdate={handleUpdate}
        closeModal={closeModal}
      />
    );

    const cancelButton = screen.getByText("❌");
    fireEvent.click(cancelButton);

    expect(closeModal).toHaveBeenCalled();
  });
});
