import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const DetailsContainer = styled.div`
  width: auto;
  height: auto;
  display:flex;
    flex-direction: column;

`;
export const CheackOutDiv = styled.div`
  background-color: ${colors.white};
  height: auto;
  // width: auto;
  border-radius: 8px;
  padding: 20px 30px;
`;
export const GoBackLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
  font-size: 15px;
  line-hight: 25px;
`;
export const GoBackLIst = styled.li`
  list-style-type: none;
  margin: 50px 0;
`;
export const CheakOutHeader = styled.h1`
  font-size: bold;
  line-hoght: 36px;
  letter-spacing: 1.14px;
  align-item: left;
  color: ${colors.black};
`;

export const BillingDetails = styled.div``;
export const BillingDetailsHeader = styled.p`
  font-weight: bold;
  font-side: 13px;
  line-height: 25px;
  letter-spacing: 0.93px;
  color: ${colors.primary01};
`;
export const NameDiv = styled.div``;
export const NameLabel = styled.label`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -0.21px;
`;
export const NameAndEmailDiv = styled.div`
  display: flex;
  gap: 32px;
`;
export const NameInput = styled.input`
  height: 35px;
  width: 20rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
font-weight: bold;
`;
export const PhoneNumber = styled.div`
  padding: 30px 0px;
`;
export const ShippingInfo = styled.h2``;

export const ShippingInfoHeader = styled.p`
  font-weight: bold;
  font-side: 13px;
  line-height: 25px;
  letter-spacing: 0.93px;
  color: ${colors.primary01};
`;
export const ShippingAddress = styled.input`
  height: 35px;
  width: 96.5%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
  font-side: 0px;
font-weight: bold;

`;
export const ShppingInputDiv = styled.div`
  height: auto;
  font-side: 30px;
`;

export const ZipCodeContainer = styled.div`
  margin: 20px 0px;
`;
export const ShippingAddDiv = styled.div`
  background: green;
  margin: 30px 0px;
`;
export const PaymentMethodDiv = styled.div``;
export const PaymentMethodHeader = styled.p`
  font-weight: bold;
  font-side: 13px;
  line-height: 25px;
  letter-spacing: 0.93px;
  margin: 0px;
  color: ${colors.primary01};
`;
export const PaymentMethod = styled.p`
  font-weight: bold;
  font-side: 11px;
  line-height: 25px;
  letter-spacing: -0.21px;
  color: ${colors.black};
  margin-bottom: 0px;
  margin-top: -2px;
`;
export const PaymentOptionDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const EmoneyTextDiv = styled.div`
  height: 35px;
  width: 20rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
  display: flex;
  gap: 20px;
  &:hover {
    border: 1px solid ${colors.primary01};
  }
`;
export const EMoney = styled.input`
  heighy: 20px;
  width: 20px;
  font-side: 100px;
  background: red;
  cursor: pointer;
  background: ${colors.primary01};
  color: ${colors.primary01};
font-weight: bold;

`;
export const EmoneyText = styled.p`
  font-weight: bold;
  font-side: 14px;
  line-height: 25px;
  letter-spacing: -0.21px;
  color: ${colors.black};
  margin-top: 4px;
`;
export const EMoneyDiv = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;
export const EmoneyNumAndPinDiv = styled.div``;
export const EMoneyNumberLabel = styled.div`
margin-bottom:10px;
font-weight: bold;
`;
export const EmoneyNumberInput = styled.input`
 height: 35px;
  width: 20rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
font-weight: bold;
`;
export const EmoneyNumAndPinCotainer = styled.div`
display:flex;
    justify-content: space-between;
`
export const NumberDiv = styled.div``
export const PinDiv = styled.div``
export const MainContainer = styled.div`
display:flex;
gap:0px;
gap:50px;
`
// export const NumberDiv = styled.div``