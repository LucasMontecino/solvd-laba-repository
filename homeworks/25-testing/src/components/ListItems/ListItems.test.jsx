import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ListItems from "./ListItems";

describe("ListItems Component", () => {
  const items = [
    { id: "1", item: "Task 1" },
    { id: "2", item: "Task 2" },
  ];
  const deleteItem = vi.fn();
  const showModal = vi.fn();
  const setEditItem = vi.fn();

  it("renders the list of items", () => {
    render(
      <ListItems
        items={items}
        deleteItem={deleteItem}
        showModal={showModal}
        setEditItem={setEditItem}
      />
    );

    items.forEach(({ item }) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("marks an item as completed when clicked", () => {
    render(
      <ListItems
        items={items}
        deleteItem={deleteItem}
        showModal={showModal}
        setEditItem={setEditItem}
      />
    );

    const firstItem = screen.getByText("Task 1");
    fireEvent.click(firstItem);

    expect(firstItem).toHaveClass("_itemList_22918b _completed_22918b");
  });

  it("unmarks an item as completed when clicked again", () => {
    render(
      <ListItems
        items={items}
        deleteItem={deleteItem}
        showModal={showModal}
        setEditItem={setEditItem}
      />
    );

    const firstItem = screen.getByText("Task 1");
    fireEvent.click(firstItem);
    fireEvent.click(firstItem);

    expect(firstItem).not.toHaveClass("completed");
  });

  it("calls setEditItem and showModal when edit icon is clicked", () => {
    render(
      <ListItems
        items={items}
        deleteItem={deleteItem}
        showModal={showModal}
        setEditItem={setEditItem}
      />
    );

    const editIcon = screen.getAllByRole("button")[0];
    fireEvent.click(editIcon);

    expect(setEditItem).toHaveBeenCalledWith(items[0]);
    expect(showModal).toHaveBeenCalled();
  });

  it("calls deleteItem when delete icon is clicked", () => {
    render(
      <ListItems
        items={items}
        deleteItem={deleteItem}
        showModal={showModal}
        setEditItem={setEditItem}
      />
    );

    const deleteIcon = screen.getAllByRole("button")[1];
    fireEvent.click(deleteIcon);

    expect(deleteItem).toHaveBeenCalledWith(items[0].id);
  });
});
