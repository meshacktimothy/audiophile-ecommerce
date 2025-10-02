import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const BestAudioContainer = styled.div`
  width: 100%;  
    // background-color: ${colors.secondary02};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    // max-width: 1210px;
    margin-left: auto;
    margin-right: auto;
    `
export const BestAudioTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 225px;
    `

export const BestAudioText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 22px;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        color: ${colors.black};
    }
    span{   
        color: ${colors.primary01};
    }
    p{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: ${colors.black};
        }
    `