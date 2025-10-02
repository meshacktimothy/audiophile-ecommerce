import {
  BestAudioContainer,
  BestAudioText,
  BestAudioTextContainer,
} from "./styles";

import AiduoImage from "../../../assets/icons/aduioImage.svg";
export default function index() {
  return (
    <>
      <BestAudioContainer>
        <BestAudioTextContainer>
          <BestAudioText>
            <h1>
              BRINGING YOU THE <br /> <span> BEST</span> AUDIO GEAR
            </h1>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              <br /> store for high end headphones, earphones, speakers, and
              audio
              <br /> accessories. We have a large showroom and luxury <br />
              demonstration rooms available for you to browse and <br />
              experience a wide range of our products. Stop by our store to{" "}
              <br />
              meet some of the fantastic people who make Audiophile the <br />
              best place to buy your portable audio equipment.
            </p>
          </BestAudioText>
          <AiduoImage></AiduoImage>
        </BestAudioTextContainer>
      </BestAudioContainer>
    </>
  );
}
