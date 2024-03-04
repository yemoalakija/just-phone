import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
    if (!product) {
        return null; // or handle the case when product is undefined/null
    }

    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/products/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
        </Card>
    );
}

export default Product;
