import { SecondSpearkerImg,SecondSpeakerConatiner,SecondSpeakerText } from "./styles";
import SecondSpeakerButton from "../../../components/Botton"
import SecondSpearkerImage from "../../../assets/images/image-speaker-zx7.jpg";

export default function index() {
  return (
    <>
    <SecondSpeakerConatiner >
        <SecondSpearkerImg src={SecondSpearkerImage}/>
        <SecondSpeakerText>
            <h2>ZX7 SPEAKER</h2>
            <SecondSpeakerButton/>
        </SecondSpeakerText>
     </SecondSpeakerConatiner>
    </>
  );
}
