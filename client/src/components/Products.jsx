import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  margin-top: 2px;
  display: grid;
  row-gap: 2px;
  column-gap: 2px;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff6ea;
  width: 100%;
  height: 100vh;
  /* ${mobile({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  })} */
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
        if (!error.response) {
          console.log("Error: Network Error");
        } else {
          console.log(error.response.data.message);
        }
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        : products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
    </Container>
  );
};
export default Products;
