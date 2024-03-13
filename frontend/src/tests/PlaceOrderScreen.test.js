import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderActions";
import { PlaceOrderScreen } from "../screens/PlaceOrderScreen";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../actions/orderActions", () => ({
  createOrder: jest.fn(),
}));

describe("PlaceOrderScreen", () => {
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
        shippingAddress: {
          address: "123 Street",
          city: "City",
          postalCode: "12345",
          country: "Country",
        },
        paymentMethod: "PayPal",
        itemsPrice: "50.00",
        shippingPrice: "0.00",
        taxPrice: "4.10",
        totalPrice: "54.10",
      },
      orderCreate: {
        order: {
          _id: "123456789",
        },
        error: null,
        success: true,
      },
    });
  });

  test("renders shipping details", () => {
    render(<PlaceOrderScreen />);
    expect(screen.getByText("Shipping")).toBeInTheDocument();
    expect(screen.getByText("Shipping: 123 Street, City 12345, Country")).toBeInTheDocument();
  });

  test("renders payment method", () => {
    render(<PlaceOrderScreen />);
    expect(screen.getByText("Payment Method")).toBeInTheDocument();
    expect(screen.getByText("Method: PayPal")).toBeInTheDocument();
  });

  test("renders order items", () => {
    render(<PlaceOrderScreen />);
    expect(screen.getByText("Order Items")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  test("renders order summary", () => {
    render(<PlaceOrderScreen />);
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("Items: $50.00")).toBeInTheDocument();
    expect(screen.getByText("Shipping: $0.00")).toBeInTheDocument();
    expect(screen.getByText("Tax: $4.10")).toBeInTheDocument();
    expect(screen.getByText("Total: $54.10")).toBeInTheDocument();
  });

  test("renders error message", () => {
    useSelector.mockReturnValueOnce({
      ...useSelector(),
      orderCreate: {
        ...useSelector().orderCreate,
        error: "Error message",
      },
    });
    render(<PlaceOrderScreen />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  test("calls createOrder action when place order button is clicked", () => {
    render(<PlaceOrderScreen />);
    const placeOrderButton = screen.getByText("Place Order");
    fireEvent.click(placeOrderButton);
    expect(createOrder).toHaveBeenCalledWith({
      orderItems: [
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
      shippingAddress: {
        address: "123 Street",
        city: "City",
        postalCode: "12345",
        country: "Country",
      },
      paymentMethod: "PayPal",
      itemsPrice: "50.00",
      shippingPrice: "0.00",
      taxPrice: "4.10",
      totalPrice: "54.10",
    });
  });

  test("redirects to order details page after successful order creation", () => {
    render(<PlaceOrderScreen />);
    expect(screen.queryByText("Order Details")).toBeNull();
    expect(screen.queryByText("Order ID: 123456789")).toBeNull();
    useSelector.mockReturnValueOnce({
      ...useSelector(),
      orderCreate: {
        ...useSelector().orderCreate,
        success: true,
      },
    });
    render(<PlaceOrderScreen />);
    expect(screen.getByText("Order Details")).toBeInTheDocument();
    expect(screen.getByText("Order ID: 123456789")).toBeInTheDocument();
  });
});