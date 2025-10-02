import {
  InnerContainer,
  MainContainer,
  // AduioDiv,
  CardContainer,
} from "./styles";
import Hero from "./Hero";
import FirstSpeaker from "./FirstSpeaker";
import SecondSpeaker from "./SecondSpeaker";
import ThirdSpeaker from "./ThirdSpeaker";
import Card from "../../home/Card";
import AboutAduio from "../../home/BestAudio";
import Footer from "../../../components/Footer";

export default function HandPhones() {
  return (
    <>
      <MainContainer>
        <Hero />

        <InnerContainer>
          <FirstSpeaker />
          <SecondSpeaker />
          <ThirdSpeaker />
          <CardContainer>
            <Card />
          </CardContainer>
          {/* <AduioDiv> */}
          <AboutAduio />
          {/* </AduioDiv> */}
        </InnerContainer>
        <Footer />
      </MainContainer>
    </>
  );
}
