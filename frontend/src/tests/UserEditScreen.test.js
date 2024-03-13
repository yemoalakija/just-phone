import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { UserEditScreen } from "../screens/UserEditScreen";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("UserEditScreen", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      userDetails: {
        error: null,
        loading: false,
        user: {
          _id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          isAdmin: false,
        },
      },
      userUpdate: {
        error: null,
        loading: false,
        success: false,
      },
    });
  });

  test("renders user edit form", () => {
    render(<UserEditScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Is Admin")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Update" })
    ).toBeInTheDocument();
  });

  test("updates user details on form submission", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<UserEditScreen match={{ params: { id: 1 } }} />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email Address");
    const isAdminCheckbox = screen.getByLabelText("Is Admin");
    const updateButton = screen.getByRole("button", { name: "Update" });

    fireEvent.change(nameInput, { target: { value: "John Smith" } });
    fireEvent.change(emailInput, { target: { value: "johnsmith@example.com" } });
    fireEvent.click(isAdminCheckbox);
    fireEvent.click(updateButton);

    expect(dispatch).toHaveBeenCalledWith(
      updateUser({ _id: 1, name: "John Smith", email: "johnsmith@example.com", isAdmin: true })
    );
  });

  test("redirects to user list after successful update", () => {
    const history = { push: jest.fn() };
    useSelector.mockReturnValue({
      userDetails: {
        error: null,
        loading: false,
        user: {
          _id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          isAdmin: false,
        },
      },
      userUpdate: {
        error: null,
        loading: false,
        success: true,
      },
    });

    render(
      <UserEditScreen
        match={{ params: { id: 1 } }}
        history={history}
      />
    );

    expect(history.push).toHaveBeenCalledWith("/admin/userlist");
  });
});