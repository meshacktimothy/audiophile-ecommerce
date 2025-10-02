import styled from "@emotion/styled";
import colors from "../../../../styles/color";

export const FirstSpeakerContainer = styled.div`
width:100%;
height:90vh;
display:flex;
gap:15%;
margin: 80px 0px;
`
export const FirstSpeakerDiv = styled.div`
background-color:${colors.secondary01};
  border-radius: 8px;
width:50%;
align-items: center;
justify-content: center;
display: flex;

`

export const FirstSpeakerTextContainer = styled.div`
width:auto;
margin:5% 0px;
height:auto;
// background-color:red;
`
export const ProductName = styled.h1`
 font-weight: bold;
    line-height: 44px;
    font-size: 40px;
    letter-spacing: 1.43px;
    color:${colors.black};
`

export const AboutProduct = styled.p`
  font-weight: medium;
    font-size: 15px;
    line-height: 25px;
letter-spacing: 0;
color:${colors.black};
`