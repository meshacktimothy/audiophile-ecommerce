import colors from "../../../styles/color";
import styled from "@emotion/styled";

export const CardContainer = styled.div`
width:1200px;
height:250px;
max-with:1200px;
display:flex;
margin:200px auto 150px auto;
gap:30px;
`
export const CardHeadPhones = styled.div`
background:${colors.secondary01};
border-radius: 8px;
height:80%;    
width:100%; 
flex-direction: column;
display:flex;
justify-content: center;
align-items: center;
`
export const CardSpeaker = styled.div`
background:${colors.secondary01};
border-radius: 8px;
height:80%;     
width:100%; 
flex-direction: column;
display:flex;
justify-content: center;
align-items: center;
`

export const CardEarPhones = styled.div`
background:${colors.secondary01};
border-radius: 8px;
height:80%;    
width:100%; 
flex-direction: column;
display:flex;
justify-content: center;
align-items: center;
`
export const CardHeadPhonesHeader = styled.h1`
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.29px;
    text-align: center;
    margin-top:80px;
    color:${colors.black};
    `
export const CardHeadSpeakerHeader = styled.h1`
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.29px;
    text-align: center;
    margin-top:80px;
    color:${colors.black};
    `

export const CardEarPhonesHeader = styled.h1`
     font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.29px;
    text-align: center;
    margin-top:80px;
    color:${colors.black};`

export const CardHeadPhonesButton = styled.button`
    width: 104px;
    height: 40px;
    background: transparent;
    border-radius: 20px;
    border:none;
    color:${colors.black};
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    justify-content: center;
align-items: center;
    display:flex;   
    gap:10px;
    cursor:pointer;
    `
export const HandPhoneIconDiv = styled.div`
position: absolute;
margin-top:-15%;
  `