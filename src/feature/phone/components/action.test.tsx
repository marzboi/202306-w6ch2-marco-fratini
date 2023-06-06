import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Action } from "./action";
import phoneSlice, { toggleCall } from "../redux/phone.slice";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
describe("Given the Action component", () => {
  describe("When display length is 9 and calling is false", () => {
    beforeEach(() => {
      const mockStore = configureStore({
        reducer: {
          phone: phoneSlice,
        },
      });

      render(
        <Provider store={mockStore}>
          <Action />
        </Provider>
      );
    });

    test("Then the call button should be active and on clicking it calls the handleCall function", async () => {
      const callButton = screen.getByText("Call");
      expect(callButton).toHaveClass("active");
      userEvent.click(callButton);
      await waitFor(() => expect(phoneSlice).toHaveBeenCalled());
    });
  });

  describe("When calling is true", () => {
    beforeEach(() => {
      const mockStore = configureStore({
        reducer: {
          phone: phoneSlice,
        },
      });

      render(
        <Provider store={mockStore}>
          <Action />
        </Provider>
      );
    });

    test("Then the hang up button should be active and on clicking it calls the handleHang function", async () => {
      const hangButton = screen.getByText("Hang Up");
      expect(hangButton).toHaveClass("hang");
      userEvent.click(hangButton);
      await waitFor(() => expect(toggleCall).toHaveBeenCalled());
    });
  });

  describe("When calling is false and display length is not 9", () => {
    beforeEach(() => {
      const mockStore = configureStore({
        reducer: {
          phone: phoneSlice,
        },
      });

      render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <Action />
          </Provider>
        </MemoryRouter>
      );
    });

    test("Then the call button should not be active", () => {
      const callButton = screen.getByText("Call");
      expect(callButton).not.toHaveClass("hang");
    });
  });
});
