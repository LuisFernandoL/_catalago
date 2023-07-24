import { styled } from "styled-components";

export const StyleListProduct = styled.ul`

   margin: 2rem 0;
   gap: 4rem;
   display: flex;
   flex-direction: column;


  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
    margin-top: 9rem;
    margin-bottom: 1rem;
  }
`;
