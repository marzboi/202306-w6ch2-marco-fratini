import { Display } from "./display";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContextStructure, PhoneContext } from "../../context/phone.context";

describe("Given the Display component", () => {
  describe("When display is an empty string", () => {
    const value: ContextStructure = {
      phoneContext: { display: "" },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <PhoneContext.Provider value={value}>
          <Display />
        </PhoneContext.Provider>
      );
    });

    test("Then it should render a span with the class 'number'", () => {
      const spanElement = document.querySelector(".number");
      expect(spanElement).toBeInTheDocument();
    });

    test("And it should display an empty string", () => {
      const spanElement = document.querySelector(".number");
      expect(spanElement?.textContent).toBe("");
    });
  });

  describe("When display is '1234'", () => {
    const value: ContextStructure = {
      phoneContext: { display: "1234" },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <PhoneContext.Provider value={value}>
          <Display />
        </PhoneContext.Provider>
      );
    });

    test("Then it should render a span with the class 'number'", () => {
      const spanElement = document.querySelector(".number");
      expect(spanElement).toBeInTheDocument();
    });

    test("And it should display '1234'", () => {
      const spanElement = document.querySelector(".number");
      expect(spanElement?.textContent).toBe("1234");
    });
  });
});
