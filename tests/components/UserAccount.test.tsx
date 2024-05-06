import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("group", () => {
  it("should render the if there is name as a props", () => {
    const user: User = { id: 1, name: "dilshad" };
    render(<UserAccount user={user} />);
    const name = screen.getByText(/name:/i);
    expect(name).toBeInTheDocument();
  });
  it("should render button if ther user is admine", () => {
    const user: User = { id: 1, name: "dilshad", isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should render button if ther user is admine", () => {
    const user: User = { id: 1, name: "dilshad", isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render button if the user is not admin ", () => {
    const user: User = { id: 1, name: "dilshad" };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
