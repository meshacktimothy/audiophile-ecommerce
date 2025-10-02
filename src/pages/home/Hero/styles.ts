import styled from "@emotion/styled"
import colors from "../../../styles/color"
import HeroImage from "../../../assets/images/image-hero.jpg"

export const HeroDiv = styled.div`
background-color: ${colors.black};
background-image: url(${HeroImage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
with: 100%;
height:110vh;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const HandPhoneComponent = styled.div`

margin-top: 100px;
padding: 0px 30px 0px 30px;
`
export const HandPhoneTaitle = styled.h2`      
font-weight: regular;
font-size: 14px;
letter-spacing: 10px;
margin-bottom: 32px;
color:${colors.secondary04};
`
export const HandPhoneHeader = styled.h1`
font-weight: bold;
font-size: 56px;    
letter-spacing: 2px;
margin-bottom: 32px;
color:${colors.white};  
`
export const HandPhoneLetter = styled.p`
font-weight: medium;    
line-height: 25px;
color:${colors.secondary04};
font-size: 15px;
margin-bottom: 32px;
`






// export const HandWrittingTwo = styled.h2`
// font-family: 'Manrope', sans-serif;
// font-weight: regular;
// font-size: 14px;
// letter-spacing: 10px;
// margin-top: 100px;
// margin-bottom: 32px;
// color:${colors.secondary04};
// `
// export const HandWrittingOne = styled.h1`
// font-family: 'Manrope', sans-serif;
// font-weight: bold;
// font-size: 56px;   
// letter-spacing: 2px;
// margin-bottom: 32px;
// `
// export const HandWrittingP = styled.p`
// font-weight: medium;
// line-height: 25px;
// color:${colors.secondary04};
// font-size: 15px;`

// export const HeaderButton = styled.button`
// background-color: ${colors.primary01};
// color:${colors.white};
// border:none;
// padding: 15px 30px 15px 30px;   
// margin-top: 32px;
// font-size: 13px;
// letter-spacing: 1px;
// cursor: pointer;
// &:hover{
//     background-color: ${colors.secondary03};
//     transition: all 0.3s ease-in-out;
// }
// `

// export const HeroDiv = styled.div`
// display: flex;  
// // gap: 100px;
// align-items: center;
// justify-content: center;
// `