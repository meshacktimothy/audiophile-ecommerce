import {
  SummaryDiv,
  Heading,
  SpeakersDiv,
  XX99SpeakerDiv,
  XX59SpeakerDiv,
  YX1SpeakerDiv,
  YX1SpeakerPic,
  YX1SpeakerContainer,
  YX1SpeakerAmountDiv,
  YX1SpeakerHeading,
  YX1SpeakerAmount,
  YX1SpeakerMultiply,
  YX1SpeakerPicDiv,
  XX99peakerAmountDiv,
  XX59SpeakerImg,
  TotalDiv,
  TotalText,
  TotalAmount,
  TotalShipping,
  TotalVat,
  TotalGrant,
  Continue,
  GrandAmount,
} from "./styles";
import YX1Speaker from "../../../assets/images/YX1.png";
import XX99Speaker from "../../../assets/icons/XX99.svg";
import XX59Speaker from "../../../assets/icons/XX59.svg";

export default function index() {
  return (
    <div>
      <SummaryDiv>
        <Heading>Sammary</Heading>
        <SpeakersDiv>
          <XX59SpeakerDiv></XX59SpeakerDiv>

          {/* <XX99SpeakerDiv></XX99SpeakerDiv> */}

          <YX1SpeakerContainer>
            <YX1SpeakerPicDiv>
              <XX99SpeakerDiv>
                <XX59SpeakerImg>
                  <XX99Speaker />
                </XX59SpeakerImg>
              </XX99SpeakerDiv>
              <XX99peakerAmountDiv>
                <YX1SpeakerHeading>XX99 MK II</YX1SpeakerHeading>
                <YX1SpeakerAmount>$ 2,999</YX1SpeakerAmount>
              </XX99peakerAmountDiv>
            </YX1SpeakerPicDiv>
            <YX1SpeakerMultiply>x1</YX1SpeakerMultiply>
          </YX1SpeakerContainer>

          <YX1SpeakerContainer>
            <YX1SpeakerPicDiv>
              <XX99SpeakerDiv>
                <XX59SpeakerImg>
                  <XX59Speaker />
                </XX59SpeakerImg>
              </XX99SpeakerDiv>
              <YX1SpeakerAmountDiv>
                <YX1SpeakerHeading>XX59</YX1SpeakerHeading>
                <YX1SpeakerAmount>$ 899</YX1SpeakerAmount>
              </YX1SpeakerAmountDiv>
            </YX1SpeakerPicDiv>
            <YX1SpeakerMultiply>x2</YX1SpeakerMultiply>
          </YX1SpeakerContainer>

          <YX1SpeakerContainer>
            <YX1SpeakerPicDiv>
              <YX1SpeakerDiv>
                <YX1SpeakerPic src={YX1Speaker} />
              </YX1SpeakerDiv>
              <YX1SpeakerAmountDiv>
                <YX1SpeakerHeading>YX1</YX1SpeakerHeading>
                <YX1SpeakerAmount>$ 599</YX1SpeakerAmount>
              </YX1SpeakerAmountDiv>
            </YX1SpeakerPicDiv>
            <YX1SpeakerMultiply>x1</YX1SpeakerMultiply>
          </YX1SpeakerContainer>
          <TotalDiv>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>$ 5,396</TotalAmount>
          </TotalDiv>
          <TotalShipping>
            <TotalText>SHIPPING</TotalText>
            <TotalAmount>$ 50</TotalAmount>
          </TotalShipping>
          <TotalVat>
            <TotalText>VAT (INCLUDED)</TotalText>
            <TotalAmount>$ 1,079</TotalAmount>
          </TotalVat>
          <TotalGrant>
            <TotalText>GRAND TOTAL</TotalText>
            <GrandAmount>$ 5,446</GrandAmount>
          </TotalGrant>
          <Continue>CONTINUE & PAY</Continue>
        </SpeakersDiv>
      </SummaryDiv>
    </div>
  );
}
