import styled from "styled-components";
import { categories } from "../data.js";
import { mobile } from "../responsive.js";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 50px 20px 50px 20px;
  justify-content: space-between;
  background-color: #fff6ea;
  margin-top: 1px;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
