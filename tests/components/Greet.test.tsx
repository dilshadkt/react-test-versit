import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";
describe("group", () => {
  it("should render Hello with the given name when name is provede", () => {
    render(<Greet name="Dilshad" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/dilshad/i);
  });
  it("should  render Login button if there has no name", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
