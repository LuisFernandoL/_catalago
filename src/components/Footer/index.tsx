import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { StyledContainer } from "../../styles/grid";
import { StyleFooter } from "./StyleFooter";
export const Footer = () => {
  return (
    <StyleFooter>
      <StyledContainer>
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
      </StyledContainer>
    </StyleFooter>
  );
};
