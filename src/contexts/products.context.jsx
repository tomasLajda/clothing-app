import { createContext, useState, useEffect } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState(PRODUCTS);
  const value = { products, setproducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
