import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Action } from "./action";
import { ContextStructure, PhoneContext } from "../../context/phone.context";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter } from "react-router-dom";
describe("Given the Action component", () => {
  const mockHandleCall = jest.fn();
  const mockHandleHang = jest.fn();

  describe("When display length is 9 and calling is false", () => {
    const value: ContextStructure = {
      phoneContext: {
        handleCall: mockHandleCall,
        handleHang: mockHandleHang,
        display: "123456789",
        calling: false,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <PhoneContext.Provider value={value}>
            <Action />
          </PhoneContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then the call button should be active and on clicking it calls the handleCall function", async () => {
      const callButton = screen.getByText("Call");
      expect(callButton).toHaveClass("active");
      userEvent.click(callButton);
      await waitFor(() => expect(mockHandleCall).toHaveBeenCalled());
    });
  });

  describe("When calling is true", () => {
    const value: ContextStructure = {
      phoneContext: {
        handleCall: mockHandleCall,
        handleHang: mockHandleHang,
        display: "",
        calling: true,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <PhoneContext.Provider value={value}>
          <Action />
        </PhoneContext.Provider>
      );
    });

    test("Then the hang up button should be active and on clicking it calls the handleHang function", async () => {
      const hangButton = screen.getByText("Hang Up");
      expect(hangButton).toHaveClass("active");
      userEvent.click(hangButton);
      await waitFor(() => expect(mockHandleHang).toHaveBeenCalled());
    });
  });

  describe("When calling is false and display length is not 9", () => {
    const value = {
      phoneContext: {
        handleCall: mockHandleCall,
        handleHang: mockHandleHang,
        display: "1234",
        calling: false,
        keyValue: 1,
        handleAddNumber: jest.fn(),
        handleDelete: jest.fn(),
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <PhoneContext.Provider value={value}>
            <Action />
          </PhoneContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then the call button should not be active", () => {
      const callButton = screen.getByText("Call");
      expect(callButton).not.toHaveClass("active");
    });
  });
});
