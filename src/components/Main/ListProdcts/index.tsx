// import { useContext } from "react";
// import { ProductContext } from "../../../Provider/ProductContext";
import { CarProducts } from "../ProductCard";
import { StyleListProduct } from "./StyleListProduct";
import { useContext } from "react";
import { ProductContext } from "../../../Provider/ProductContext";

export const ProductsList = () => {
  const { productsList } = useContext(ProductContext);

  return (
    <StyleListProduct>
      {productsList.map((product) => (
        <CarProducts key={product.id} product={product} />
      ))}
    </StyleListProduct>
  );
};
