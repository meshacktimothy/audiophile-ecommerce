import {
  FirstSpeakerContainer,
  FirstSpeakerDiv,
  FirstSpeakerTextContainer,
  NewProduct,
  ProductName,
  AboutProduct,
} from "./styles";

import FirstSpeaker from "../../../../assets/icons/Headphonefirstspeaker.svg";
import SeeProductBtn from "../../../../components/Botton";

export default function index() {
  return (
    <>
      <FirstSpeakerContainer>
        <FirstSpeakerDiv>
          <FirstSpeaker />
        </FirstSpeakerDiv>
        <FirstSpeakerTextContainer>
          <NewProduct>NEW PRODUCT</NewProduct>
          <ProductName>
            XX99 Mark II <br /> Headphones
          </ProductName>
          <AboutProduct>
            The new XX99 Mark II headphones is the pinnacle <br /> of pristine
            audio. It redefines your premium headphone experience by <br />{" "}
            reproducing the balanced depth and precision of studio-quality{" "}
            <br /> sound.
          </AboutProduct>
          <SeeProductBtn></SeeProductBtn>
        </FirstSpeakerTextContainer>
      </FirstSpeakerContainer>
    </>
  );
}
