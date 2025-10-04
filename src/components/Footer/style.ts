import colors from "../../styles/color";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  width: 100%;
  color: ${colors.white};
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const FooterLogo = styled.div`
  width: 100px;
  height: 10px;
  background: ${colors.primary01};
  opacity: 100%;
  position: absolute;
  top: 0px;
  left: 30px;
`;

export const FooterContent = styled.div`
  width: 1200px;
  max-width: 1200px;
`;
export const TextContainer = styled.div`
  color: ${colors.white};
  width: 100%;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 0px;
  margin: 10px 0px;
  font-size: 15px;
  font-weight: bold;
  line-height: 25px;
  opacity: 50%;
`;
export const FooterInternetIcon = styled.div`
  display: flex;
  gap: 20px;
`;
export const FooterFacebook = styled.div``;
export const FooterTwitter = styled.div``;
export const FooterIntergram = styled.div``;

export const HeaderNav = styled.nav`
  width: 12000px;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 0px;
  margin: 10px 0px;
`;
export const UnderLink = styled.ul`
  // margin-right: 150px;
`;
export const UnderList = styled.li`
  list-style-type: none;
`;
export const HearderLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  margin-left: 40px;
  letter-spacing: 2px;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 13px;
`;
export const CopyRight = styled.small`
  width: 1200px;
  max-width: 1200px;
  font-size: 15px;
  font-weight: bold;
  line-height: 25px;
  opacity: 50%;
`;
