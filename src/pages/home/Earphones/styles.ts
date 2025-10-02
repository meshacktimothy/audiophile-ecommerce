import colors from "../../../styles/color";
import styled from "@emotion/styled";

export const EarphonesContainer = styled.div`
    height: 100%;  
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    margin-top: 80px;
    border-radius: 8px;
    padding: 20px;
      display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
export const EarContainer = styled.img`
  width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
    `
export const TextContainer = styled.div`
    background-color: ${colors.secondary01};
    height: 360px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    // padding: 20px; 
    text-align: center;

    h1{
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 20px;
     line-height: auto;
     align-items: left;
    }
`
export const MainTextContainer = styled.div`
    margin-left: -15%;
    `
