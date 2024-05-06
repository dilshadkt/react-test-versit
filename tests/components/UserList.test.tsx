import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("group", () => {
  it("should render no user if ther the user array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });
  it("should render no user if ther the user array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });
  it("should render a list users", () => {
    const users: User[] = [
      {
        id: 1,
        name: "dilshad",
      },
      {
        id: 2,
        name: "shanu",
      },
    ];
    render(<UserList users={users} />);
    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
