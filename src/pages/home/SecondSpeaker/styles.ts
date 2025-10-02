import colors from "../../../styles/color";
import styled from "@emotion/styled";

export const SecondSpeakerConatiner = styled.div`
width: 100%;
height: 320px;
// background-color: ${colors.secondary04};
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

`
export const SecondSpearkerImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 8px;
margin: 0 20px 0 20px;
overflow: hidden;
position: relative;
`
export const SecondSpeakerText = styled.div`
position: absolute;
margin-right: 60%;
// margin-top: -10%;
h2{
    color: ${colors.black};
    font-size: 36px;
    font-weight: 700;
    line-height: auto;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
`