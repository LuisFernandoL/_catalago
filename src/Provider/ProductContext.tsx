import { createContext, useState } from "react";
import { IProductContext, IProducts, IProductsProviderProps } from "./@types";
import { products } from "../data/products";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductsProviderProps) => {
  const [search, setSearch] = useState("");
  const [productsList, setProductsList] = useState<IProducts[]>(products);
  const newList = products;

  const searchItem = (data: string) => {
    if (data.length > 0) {
      const filterProducts = newList.filter((product) =>
        product.name.toUpperCase().includes(data.toUpperCase())
      );
      setProductsList(filterProducts);
    } else {
      setProductsList(newList);
    }
  };

  const searchCategory = async (data: string) => {
    const filterProducts = newList.filter((product) =>
      product.category.toUpperCase().includes(data.toUpperCase())
    );

    if (data !== "todos") {
      setProductsList(filterProducts);
    } else {
      setProductsList(newList);
    }
  };

  return (
    <ProductContext.Provider value={{ setSearch, productsList, searchItem, searchCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
