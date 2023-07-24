import { styled } from "styled-components";

export const StylesHeader = styled.header`
  display: flex;
  background-color: #fac4ea;
  z-index: 1;
  width: 100%;
  margin: 0;
  box-shadow: 0.2rem 0.2rem 0.5rem 0.4rem rgb(0, 0, 0, 0.25);

  .divHeader {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
    .divButtons{
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }

  @media (min-width: 1000px) {
    display: flex;
    height: 10vh;
    background-color: #fac4ea;
    z-index: 1;
    width: 100%;
    margin: 0;
    box-shadow: 0.2rem 0.2rem 0.5rem 0.4rem rgb(0, 0, 0, 0.25);

    .divHeader {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      span {
        display: flex;
        flex-direction: row;
        gap: 3rem;
      }
    }
  }
`;
