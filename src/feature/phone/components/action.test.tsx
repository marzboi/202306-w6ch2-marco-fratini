import { Action } from "./action";
import { render, screen, fireEvent } from "@testing-library/react";
import { usePhone } from "../hooks/use.phone";
import { mockDeep, MockProxy } from "jest-mock-extended";

jest.mock("../hooks/use.phone");

describe("Action Component", () => {
  let mockUsePhone: MockProxy<ReturnType<typeof usePhone>>;

  beforeEach(() => {
    mockUsePhone = mockDeep<ReturnType<typeof usePhone>>();
    (usePhone as jest.MockedFunction<typeof usePhone>).mockReturnValue(
      mockUsePhone
    );
  });

  it("should render without crashing", () => {
    render(<Action />);
    expect(screen.getByText("Call")).toBeInTheDocument();
    expect(screen.getByText("Hang Up")).toBeInTheDocument();
  });

  it("should trigger handleCall when Call is clicked", () => {
    render(<Action />);
    fireEvent.click(screen.getByText("Call"));
    expect(mockUsePhone.handleCall).toHaveBeenCalled();
  });

  it("should trigger handleHang when Hang Up is clicked", () => {
    render(<Action />);
    fireEvent.click(screen.getByText("Hang Up"));
    expect(mockUsePhone.handleHang).toHaveBeenCalled();
  });
});
