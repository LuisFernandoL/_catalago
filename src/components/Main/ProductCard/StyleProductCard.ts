import { styled } from "styled-components";

export const StyleProductCard = styled.li`
  display: flex;
  flex-direction: column;
  min-width: clamp(150px, 100%, 250px);
  min-height: clamp(150px, 100%, 340px);
  box-shadow: 0.2rem 0.2rem 0.5rem 0.4rem rgb(0, 0, 0, 0.25);
  gap: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #f4d6eb;

  transition: transform 0.5s;


  &:hover {
    transform: scale(1.05);
    border-color: #27ae60;
    button {
      background-color: #27ae60;
    }
  }

  p{
    font-size: 2.2rem;
    font-weight: 600;

  }

  h2{
    font-size: 1.8rem;
    font-weight: 500;

  }

  h3{
    font-size: 1.4rem;
    font-weight: 400;

  }

  h4{
    font-size: 1.8rem;
    font-weight: 600;

  }

  div {
    width: 100%;
    height: 17rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;
