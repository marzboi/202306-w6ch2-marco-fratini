import { Info } from "./info";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContextStructure, PhoneContext } from "../context/phone.context";

describe("Given the Info component", () => {
  describe("When calling is false", () => {
    const value: ContextStructure = {
      phoneContext: { calling: false },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <PhoneContext.Provider value={value}>
          <Info />
        </PhoneContext.Provider>
      );
    });

    test("Then it should render a span with the class 'message'", () => {
      const spanElement = document.querySelector(".message");
      expect(spanElement).toBeInTheDocument();
    });

    test("And it should display an empty string", () => {
      const spanElement = document.querySelector(".message");
      expect(spanElement?.textContent).toBe("");
    });
  });

  describe("When calling is true", () => {
    const value: ContextStructure = {
      phoneContext: { calling: true },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <PhoneContext.Provider value={value}>
          <Info />
        </PhoneContext.Provider>
      );
    });

    test("Then it should render a span with the class 'message'", () => {
      const spanElement = document.querySelector(".message");
      expect(spanElement).toBeInTheDocument();
    });

    test("And it should display 'Calling'", () => {
      const spanElement = document.querySelector(".message");
      expect(spanElement?.textContent).toBe("Calling");
    });
  });
});
