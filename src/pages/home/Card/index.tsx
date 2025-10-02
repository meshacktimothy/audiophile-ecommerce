import {
  CardContainer,
  CardHeadPhones,
  CardSpeaker,
  CardEarPhones,
  CardHeadPhonesHeader,
  CardHeadPhonesButton,
  CardHeadSpeakerHeader,
  CardEarPhonesHeader,
  HandPhoneIconDiv,
} from "./styles";
import ShopIcon from "../../../assets/icons/shopicon.svg";
import HandPhoneIcon from "../../../assets/icons/cardheadphone.svg";
import HandSpeakerIcon from "../../../assets/icons/cardspeakericon.svg"
import HandEarIcon from "../../../assets/icons/cardearicon.svg"

export default function index() {
  return (
    <>
      <CardContainer>
        <CardHeadPhones>
          <HandPhoneIconDiv>
            <HandPhoneIcon></HandPhoneIcon>
          </HandPhoneIconDiv>
          <CardHeadPhonesHeader>HEADPHONES</CardHeadPhonesHeader>
          <CardHeadPhonesButton>
            Shop <ShopIcon />
          </CardHeadPhonesButton>
        </CardHeadPhones>
        <CardSpeaker>
              <HandPhoneIconDiv>
            <HandSpeakerIcon/>
          </HandPhoneIconDiv>
          <CardHeadSpeakerHeader>SPEAKERS</CardHeadSpeakerHeader>
          <CardHeadPhonesButton>
            Shop <ShopIcon />
          </CardHeadPhonesButton>
        </CardSpeaker>
        <CardEarPhones>
              <HandPhoneIconDiv>
            <HandEarIcon/>
          </HandPhoneIconDiv>
          <CardEarPhonesHeader>EARPHONES</CardEarPhonesHeader>
          <CardHeadPhonesButton>
            Shop <ShopIcon />
          </CardHeadPhonesButton>
        </CardEarPhones>
      </CardContainer>
    </>
  );
}
