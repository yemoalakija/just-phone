import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterScreen } from "../screens/RegisterScreen";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("RegisterScreen", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      userRegister: {
        error: null,
        loading: false,
        userInfo: null,
      },
    });
  });

  test("renders register form", () => {
    render(<RegisterScreen />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  test("displays error message if passwords do not match", () => {
    render(<RegisterScreen />);
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const registerButton = screen.getByRole("button", { name: "Register" });

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password456" },
    });
    fireEvent.click(registerButton);

    expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
  });

  test("dispatches register action if passwords match", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<RegisterScreen />);
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const registerButton = screen.getByRole("button", { name: "Register" });

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });
    fireEvent.click(registerButton);

    expect(dispatch).toHaveBeenCalledWith(register("", "", "password123"));
  });

  test("redirects to specified page after successful registration", () => {
    const history = { push: jest.fn() };
    useSelector.mockReturnValue({
      userRegister: {
        error: null,
        loading: false,
        userInfo: { id: 1, name: "John Doe" },
      },
    });

    render(
      <RegisterScreen
        history={history}
        location={{ search: "?redirect=/dashboard" }}
      />
    );

    expect(history.push).toHaveBeenCalledWith("/dashboard");
  });
});
