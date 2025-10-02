import styled from "@emotion/styled";
import colors from "../../styles/color";

export const MainHeader = styled.div`
padding: 0px 30px 0px 30px;
`

export const Styleheader = styled.div `
height:auto;
`;
export const HeaderNav = styled.nav`
display: flex;  
justify-content: space-between;
align-items: center;
text-align: center;
padding:20px 0px 20px 0px;
`
export const UnderLink = styled.ul`
// margin-right: 150px;
`
export const UnderList = styled.li`
    list-style-type: none;
    display:flex;
    gap:16px
`
export const HearderLink = styled.a`
color:${colors.white};
text-decoration: none;
margin-left:40px;
letter-spacing: 2px;
font-weight:bold;
letter-spacing: 2px;
font-size: 13px;
`
export const HearderHr = styled.hr`
border: 1px solid ${colors.secondary04};
with:20px;
`

