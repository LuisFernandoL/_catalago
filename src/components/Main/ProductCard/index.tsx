import { IProducts } from "../../../Provider/@types";
import { StyleProductCard } from "./StyleProductCard";

interface IProductListProps {
  product: IProducts;
}

export const CarProducts = ({ product }: IProductListProps) => {
  return (
    <StyleProductCard>
      <div>
        <img src={product.img} />
      </div>
      <p>{product.name}</p>
      <h2>{product.description}</h2>
      <h3>{product.category}</h3>
      <h4>R$ {product.price},00</h4>
    </StyleProductCard>
  );
};
