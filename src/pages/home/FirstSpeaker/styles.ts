import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const SpeakerDiv = styled.div`
//   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary01};
  border-radius: 8px;
  height: 560px;
  margin: 0 24px;
  padding: 0 24px;
  // gap: 125px;
  margin-top: 80px;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;
`;

export const SpeakerText = styled.div`
  color: white;
  text-align: left;
  margin-left: 15%;
margin-top:80px;
  width:100%;
  h1 {
    font-size: 56px;
    line-height: 58px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 32px;
  }
  p {
    font-size: 15px;
    line-height: 25px;
    opacity: 0.75;
    margin-bottom: 40px;
  }
`;

export const FirstSpeakerImg = styled.img`
  width: 410px;
  height: 488px;
  margin-top: 100px;
  margin-left:100px;
  
`;

export const SpeakerIconDiv = styled.div`
  position: absolute;
margin:-15% 20px;
  left: -50px;
`;

export const FirstSpeakerContent = styled.div`
  position: absolute;
display:flex;
gap:30px;
width:100%;     
`