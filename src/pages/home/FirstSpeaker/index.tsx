import {
  SpeakerDiv,
  SpeakerText,
  FirstSpeakerImg,
  // SpeakerIconDiv,
} from "./styles";
import HandponeButton from "../../../components/Botton";
import SpeakerIcon from "../../../assets/icons/pattern-circles.svg";
import bigSpeaker from "../../../assets/images/image-speaker-zx9.png";

export default function Index() {
  return (
    <>
      <SpeakerDiv>
        {/* <SpeakerIconDiv>  */}
        <FirstSpeakerImg src={bigSpeaker}></FirstSpeakerImg>
          <SpeakerIcon />
        <SpeakerText>
          <h1>
            ZX9 <br /> SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are <br /> phenomenally built to
            deliver truly remarkable <br /> sound.
          </p> 
          <HandponeButton />
        </SpeakerText>
      </SpeakerDiv>
    </>
  );
}
