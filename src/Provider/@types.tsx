import React from "react";

export interface IProductsProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  id: number;
  img: string;
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface IProductContext {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  productsList: IProducts[];
  searchItem: (data: string) => void;
  searchCategory: (data: string) => Promise<void>;
}
