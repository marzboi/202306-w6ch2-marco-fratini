import { Key } from "./key";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContextStructure, PhoneContext } from "../../context/phone.context";
import userEvent from "@testing-library/user-event";

describe("Given the Key component", () => {
  let mockHandleAddNumber: jest.Mock;
  let mockHandleDelete: jest.Mock;

  beforeEach(() => {
    mockHandleAddNumber = jest.fn();
    mockHandleDelete = jest.fn();
  });

  describe("When item is '1' and calling is false", () => {
    beforeEach(() => {
      const value: ContextStructure = {
        phoneContext: {
          handleAddNumber: mockHandleAddNumber,
          handleDelete: mockHandleDelete,
          calling: false,
        },
      } as unknown as ContextStructure;
      render(
        <PhoneContext.Provider value={value}>
          <Key item="1" />
        </PhoneContext.Provider>
      );
    });

    test("Then it should render a button with the class 'key'", () => {
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("key");
    });

    test("And on clicking the button, it calls the handleAddNumber function", async () => {
      const buttonElement = screen.getByRole("button");
      await userEvent.click(buttonElement);
      waitFor(() => expect(mockHandleAddNumber).toHaveBeenCalled());
    });
  });

  describe("When item is 'delete' and calling is false", () => {
    beforeEach(() => {
      const value: ContextStructure = {
        phoneContext: {
          handleAddNumber: mockHandleAddNumber,
          handleDelete: mockHandleDelete,
          calling: false,
        },
      } as unknown as ContextStructure;
      render(
        <PhoneContext.Provider value={value}>
          <Key item="delete" />
        </PhoneContext.Provider>
      );
    });

    test("Then it should render a button with the class 'key big'", () => {
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("key");
      expect(buttonElement).toHaveClass("big");
    });

    test("And on clicking the button, it calls the handleDelete function", async () => {
      const buttonElement = screen.getByRole("button");
      await userEvent.click(buttonElement);
      waitFor(() => expect(mockHandleDelete).toHaveBeenCalled());
    });
  });
});
