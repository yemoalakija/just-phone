import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { ProductEditScreen } from "../screens/ProductEditScreen";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("ProductEditScreen", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      productDetails: {
        loading: false,
        error: null,
        product: {
          _id: 1,
          name: "Product 1",
          price: 10,
          image: "product1.jpg",
          brand: "Brand 1",
          category: "Category 1",
          countInStock: 5,
          description: "Description 1",
        },
      },
      productUpdate: {
        loading: false,
        error: null,
        success: false,
      },
    });
  });

  test("renders product details", () => {
    render(<ProductEditScreen match={{ params: { id: 1 } }} />);
    expect(screen.getByLabelText("Name")).toHaveValue("Product 1");
    expect(screen.getByLabelText("Price")).toHaveValue("10");
    expect(screen.getByLabelText("Image")).toHaveValue("product1.jpg");
    expect(screen.getByLabelText("Brand")).toHaveValue("Brand 1");
    expect(screen.getByLabelText("Stock")).toHaveValue("5");
    expect(screen.getByLabelText("Category")).toHaveValue("Category 1");
    expect(screen.getByLabelText("Description")).toHaveValue("Description 1");
  });

  test("updates product details", () => {
    render(<ProductEditScreen match={{ params: { id: 1 } }} />);
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Updated Product" } });
    expect(nameInput).toHaveValue("Updated Product");

    const priceInput = screen.getByLabelText("Price");
    fireEvent.change(priceInput, { target: { value: "20" } });
    expect(priceInput).toHaveValue("20");

    const updateButton = screen.getByText("Update");
    fireEvent.click(updateButton);
    expect(dispatch).toHaveBeenCalledWith(
      updateProduct({
        _id: 1,
        name: "Updated Product",
        price: 20,
        image: "product1.jpg",
        brand: "Brand 1",
        category: "Category 1",
        countInStock: 5,
        description: "Description 1",
      })
    );
  });

  test("uploads product image", () => {
    render(<ProductEditScreen match={{ params: { id: 1 } }} />);
    const fileInput = screen.getByLabelText("Choose File");
    fireEvent.change(fileInput, {
      target: { files: [new File([], "test.jpg")] },
    });
    expect(fileInput.files[0]).toBeDefined();

    const uploadButton = screen.getByText("Update");
    fireEvent.click(uploadButton);
    expect(axios.post).toHaveBeenCalledWith(
      "/api/products/upload/",
      expect.any(FormData),
      expect.objectContaining({
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    );
  });
});
