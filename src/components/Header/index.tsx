import {
  Styleheader,
  UnderList,
  HearderLink,
  UnderLink,
  HearderHr,
  HeaderNav,
  MainHeader,
} from "./style";
import SvgLogo from "../../assets/icons/logo.svg";
import BookLogo from "../../assets/icons/book.svg";

export default function Header() {
  return (
    <MainHeader>
    <Styleheader>
      <HeaderNav>
        <SvgLogo></SvgLogo>
        <UnderLink>
          <UnderList>
            <li>
              <HearderLink href="#">HOME</HearderLink>
              <HearderLink href="#">HEADPHONES</HearderLink>
              <HearderLink href="#">SPEAKERS</HearderLink>
              <HearderLink href="#">EARPHONES</HearderLink>
            </li>
          </UnderList>
        </UnderLink>
        <BookLogo></BookLogo>
      </HeaderNav>
        <HearderHr></HearderHr>
    </Styleheader>
    </MainHeader>
  );
}
