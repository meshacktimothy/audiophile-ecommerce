import {
  FirstSpeakerContainer,
  FirstSpeakerDiv,
  FirstSpeakerTextContainer,
  ProductName,
  AboutProduct,
} from "./styles";

import FirstSpeaker from "../../../../assets/icons/thirdspeaker.svg";
import SeeProductBtn from "../../../../components/Botton";

export default function index() {
  return (
    <>
      <FirstSpeakerContainer>
        <FirstSpeakerDiv>
          <FirstSpeaker />
        </FirstSpeakerDiv>
        <FirstSpeakerTextContainer>
          <ProductName>
            XX59 <br /> Headphones
          </ProductName>
          <AboutProduct>
            Enjoy your audio almost anywhere and customize it to your <br />{" "}
            specific tastes with the XX59 headphones. The stylish yet <br />{" "}
            durable versatile wireless headset is a brilliant companion <br />{" "}
            at home or on the move.
          </AboutProduct>
          <SeeProductBtn></SeeProductBtn>
        </FirstSpeakerTextContainer>
      </FirstSpeakerContainer>
    </>
  );
}
