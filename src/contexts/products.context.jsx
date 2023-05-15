import { createContext, useState } from 'react';

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  const value = { products, setproducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
