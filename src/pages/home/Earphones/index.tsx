import { EarphonesContainer, EarContainer, TextContainer,MainTextContainer } from "./styles";
import EarPhones from "../../../assets/images/image-earphones-yx1.jpg";
import EarButton from "../../../components/Botton";

export default function index() {
  return (
    <>
      <EarphonesContainer>
        <EarContainer src={EarPhones} />

        <TextContainer>
          <h1>YX1 EARPHONES</h1>
          <MainTextContainer>
          <EarButton />
          </MainTextContainer>
        </TextContainer>
      </EarphonesContainer>
    </>
  );
}
