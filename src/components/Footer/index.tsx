import {
  FooterContainer,
  TextContainer,
  CopyRight,
  FooterInternetIcon,
  FooterIntergram,
  FooterTwitter,
  FooterFacebook,
  UnderList,
  HearderLink,
  UnderLink,
  HeaderNav,
  FooterContent
} from "./style";
import LogoImage from "../../assets/icons/logo.svg";
import FaceBookIcon from "../../assets/icons/faceboo.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import IntergramIcon from "../../assets/icons/intergram.svg";

export default function index() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
        <HeaderNav>
          <LogoImage></LogoImage>
          <UnderLink>
            <UnderList>
                <HearderLink href="#">HOME</HearderLink>
                <HearderLink href="#">HEADPHONES</HearderLink>
                <HearderLink href="#">SPEAKERS</HearderLink>
                <HearderLink href="#">EARPHONES</HearderLink>
          
            </UnderList>
          </UnderLink>
        </HeaderNav>
        <TextContainer>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team <br /> of music lovers and sound specialists who are
            devoted to helping you get the <br /> most out of personal audio.
            Come and visit our demo facility - we’re open 7 <br /> days a week.
          </p>

           <FooterInternetIcon>
              <FooterFacebook>
                <FaceBookIcon></FaceBookIcon>
              </FooterFacebook>
              <FooterTwitter>
                <TwitterIcon></TwitterIcon>
              </FooterTwitter>
              <FooterIntergram>
                <IntergramIcon></IntergramIcon>
              </FooterIntergram>
            </FooterInternetIcon>
        </TextContainer>
        <CopyRight>Copyright 2021. All Rights Reserved</CopyRight>
        </FooterContent>
      </FooterContainer>
    </>
  );
}

/* <FooterLink>HOME</FooterLink>
<FooterLink>HEADPHONES</FooterLink>
<FooterLink>SPEAKERS</FooterLink>
<FooterLink>EARPHONES</FooterLink> */