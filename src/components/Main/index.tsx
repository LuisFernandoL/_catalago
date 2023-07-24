import { StyledContainer } from "../../styles/grid";
import { ProductsList } from "./ListProdcts";
import { StyleMain } from "./StyleMain";

export const MainProducts = () => {
  return (
    <StyleMain>
      <StyledContainer>
        <ProductsList />
      </StyledContainer>
    </StyleMain>
  );
};
