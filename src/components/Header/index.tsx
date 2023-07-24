import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { StylesHeader } from "./StylesHeader";
import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductContext";
export const Header = () => {
  const { searchItem, searchCategory } = useContext(ProductContext);

  return (
    <StylesHeader>
      <StyledContainer className="divHeader">
        <div className="divInternal">
          <h1>Ge extensão de cilios</h1>
        </div>
        <span>
          <a href="https://www.instagram.com/gersonibeauty/" target="_blank">
            <AiOutlineInstagram fill="#b9099a" size={33} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100066974074592"
            target="_blank"
          >
            <BsFacebook fill="#0745fa" size={29} />
          </a>
          <a href="https://www.instagram.com/gersonibeauty/" target="_blank">
            <AiOutlineWhatsApp fill="#00af08" size={32} />
          </a>
        </span>
        <div>
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => searchItem(e.target.value)}
          />
        </div>
        <div className="divButtons">
          <button onClick={() => searchCategory("todos")}>Todos</button>
          <button onClick={() => searchCategory("Extensão")}>Extensão</button>
          <button onClick={() => searchCategory("Maquiagem")}>Maquiagem</button>
        </div>
      </StyledContainer>
    </StylesHeader>
  );
};
