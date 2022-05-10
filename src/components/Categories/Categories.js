import styled from "styled-components";
import { categories } from "../../Data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: "20px";
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => {
        return <CategoryItem item={item} key={index} />;
      })}
    </Container>
  );
};

export default Categories;
