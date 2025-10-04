import Header from "../../components/Header";
import { CheakOutDiv, MainContainer } from "./styles";
import Footer from "../../components/Footer";
import CheakOut from "./Details";

export default function CheakPage() {
  return (
    <div>
      <MainContainer>
        <Header />
        <CheakOutDiv>
          <CheakOut />
        </CheakOutDiv>
        <Footer />
      </MainContainer>
    </div>
  );
}
