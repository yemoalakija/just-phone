import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { CartScreen } from "../screens/CartScreen";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("CartScreen", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      cart: {
        cartItems: [
          {
            product: "1",
            name: "Product 1",
            image: "product1.jpg",
            price: 10,
            qty: 2,
            countInStock: 5,
          },
          {
            product: "2",
            name: "Product 2",
            image: "product2.jpg",
            price: 20,
            qty: 1,
            countInStock: 10,
          },
        ],
      },
    });
  });

  test("renders shopping cart title", () => {
    render(<CartScreen />);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("renders cart items", () => {
    render(<CartScreen />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  test("renders cart subtotal", () => {
    render(<CartScreen />);
    expect(screen.getByText("Subtotal (3) items")).toBeInTheDocument();
    expect(screen.getByText("$50.00")).toBeInTheDocument();
  });

  test("removes item from cart", () => {
    render(<CartScreen />);
    const removeButton = screen.getByTestId("remove-button-1");
    fireEvent.click(removeButton);
    expect(dispatch).toHaveBeenCalledWith(removeFromCart("1"));
  });

  test("updates item quantity in cart", () => {
    render(<CartScreen />);
    const quantitySelect = screen.getByTestId("quantity-select-1");
    fireEvent.change(quantitySelect, { target: { value: "3" } });
    expect(dispatch).toHaveBeenCalledWith(addToCart("1", 3));
  });

  test("proceeds to checkout", () => {
    render(<CartScreen />);
    const checkoutButton = screen.getByText("Proceed To Checkout");
    fireEvent.click(checkoutButton);
    expect(history.push).toHaveBeenCalledWith("/login?redirect=shipping");
  });
});
