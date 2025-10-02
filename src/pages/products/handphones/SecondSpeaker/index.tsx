import {
  FirstSpeakerContainer,
  FirstSpeakerDiv,
  FirstSpeakerTextContainer,
  ProductName,
  AboutProduct,
} from "./styles";

import FirstSpeaker from "../../../../assets/icons/SecondSpeaker.svg";
import SeeProductBtn from "../../../../components/Botton";

export default function index() {
  return (
    <>
      <FirstSpeakerContainer>
        <FirstSpeakerTextContainer>
          {/* <NewProduct>NEW PRODUCT</NewProduct> */}
          <ProductName>
            XX99 Mark I <br />
            Headphones
          </ProductName>
          <AboutProduct>
            As the gold standard for headphones, the classic XX99 Mark I <br />{" "}
            offers detailed and accurate audio reproduction for <br />{" "}
            audiophiles, mixing engineers, and music aficionados alike in <br />{" "}
            studios and on the go.
          </AboutProduct>
          <SeeProductBtn></SeeProductBtn>
        </FirstSpeakerTextContainer>
        <FirstSpeakerDiv>
          <FirstSpeaker />
        </FirstSpeakerDiv>
      </FirstSpeakerContainer>
    </>
  );
}
