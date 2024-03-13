import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { OrderScreen } from "../screens/OrderScreen";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("OrderScreen", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      orderDetails: {
        order: {
          _id: 1,
          itemsPrice: 100,
          orderItems: [
            {
              product: "1",
              name: "Product 1",
              image: "product1.jpg",
              price: 10,
              qty: 2,
            },
            {
              product: "2",
              name: "Product 2",
              image: "product2.jpg",
              price: 20,
              qty: 1,
            },
          ],
          shippingAddress: {
            address: "123 Street",
            city: "City",
            postalCode: "12345",
            country: "Country",
          },
          isDelivered: false,
          deliveredAt: null,
          paymentMethod: "PayPal",
          isPaid: false,
          paidAt: null,
          itemsPrice: 100,
          shippingPrice: 10,
          taxPrice: 5,
          totalPrice: 115,
        },
        error: null,
        loading: false,
      },
      orderPay: {
        loading: false,
        success: false,
      },
      orderDeliver: {
        loading: false,
        success: false,
      },
      userLogin: {
        userInfo: {
          _id: 1,
          name: "John Doe",
          email: "john@example.com",
          isAdmin: false,
        },
      },
    });
  });

  test("renders order details", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Order: 1")).toBeInTheDocument();
    expect(screen.getByText("Shipping")).toBeInTheDocument();
    expect(screen.getByText("Payment Method")).toBeInTheDocument();
    expect(screen.getByText("Order Items")).toBeInTheDocument();
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
  });

  test("renders loading spinner when loading", () => {
    useSelector.mockReturnValue({
      ...useSelector(),
      orderDetails: {
        ...useSelector().orderDetails,
        loading: true,
      },
    });
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders error message when there is an error", () => {
    useSelector.mockReturnValue({
      ...useSelector(),
      orderDetails: {
        ...useSelector().orderDetails,
        error: "Error message",
      },
    });
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  test("renders order items", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  test("renders order subtotal", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Items:")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });

  test("renders order shipping cost", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Shipping:")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });

  test("renders order tax", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Tax:")).toBeInTheDocument();
    expect(screen.getByText("$5.00")).toBeInTheDocument();
  });

  test("renders order total", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Total:")).toBeInTheDocument();
    expect(screen.getByText("$115.00")).toBeInTheDocument();
  });

  test("renders PayPal button when order is not paid", () => {
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Pay with PayPal")).toBeInTheDocument();
  });

  test("renders mark as delivered button for admin user", () => {
    useSelector.mockReturnValue({
      ...useSelector(),
      userLogin: {
        ...useSelector().userLogin,
        userInfo: {
          ...useSelector().userLogin.userInfo,
          isAdmin: true,
        },
      },
    });
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByText("Mark As Delivered")).toBeInTheDocument();
  });

  test("dispatches payOrder action when PayPal payment is successful", () => {
    const dispatch = useDispatch();
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    fireEvent.click(screen.getByText("Pay with PayPal"));
    expect(dispatch).toHaveBeenCalledWith(payOrder(1, paymentResult));
  });

  test("dispatches deliverOrder action when mark as delivered button is clicked", () => {
    const dispatch = useDispatch();
    render(<OrderScreen match={{ params: { id: 1 } }} />);
    fireEvent.click(screen.getByText("Mark As Delivered"));
    expect(dispatch).toHaveBeenCalledWith(deliverOrder(order));
  });
});
