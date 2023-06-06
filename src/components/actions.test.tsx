import { Actions } from "./actions";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContextStructure, PhoneContext } from "../context/phone.context";

describe("Given the Actions component", () => {
  const value: ContextStructure = {
    phoneContext: { display: "" },
  } as unknown as ContextStructure;

  beforeEach(() => {
    render(
      <PhoneContext.Provider value={value}>
        <Actions />
      </PhoneContext.Provider>
    );
  });

  test("Then it should render the Display component", () => {
    const displayElement = screen.getAllByRole("link");
    expect(displayElement[0]).toBeInTheDocument();
  });

  test("Then it should render the Action component", () => {
    const callButton = screen.getByText("Call");
    const hangButton = screen.getByText("Hang Up");

    expect(callButton).toBeInTheDocument();
    expect(hangButton).toBeInTheDocument();
  });
});
