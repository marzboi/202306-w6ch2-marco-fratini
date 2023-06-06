import { Keyboard } from "./keyboard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContextStructure, PhoneContext } from "../context/phone.context";

describe("Given the Keyboard component", () => {
  const mockKeyValue = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];
  const value: ContextStructure = {
    phoneContext: { keyValue: mockKeyValue },
  } as unknown as ContextStructure;

  beforeEach(() => {
    render(
      <PhoneContext.Provider value={value}>
        <Keyboard />
      </PhoneContext.Provider>
    );
  });

  test("Then it should render the Keyboard component", () => {
    const keyboardElement = screen.getByRole("list");
    expect(keyboardElement).toBeInTheDocument();
  });

  test("Then it should render the correct amount of Key components", () => {
    const keyElements = screen.getAllByRole("listitem");
    expect(keyElements).toHaveLength(mockKeyValue.length);
  });

  mockKeyValue.forEach((item) => {
    test(`Then it should render a Key component with item prop as '${item}'`, () => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
