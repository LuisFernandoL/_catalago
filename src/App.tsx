import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainProducts } from "./components/Main";
import GlobalStyles from "./styles/GlobalStyles";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainProducts />
      <Footer />
    </>
  );
};
