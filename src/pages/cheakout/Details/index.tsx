import {
  DetailsContainer,
  CheackOutDiv,
  GoBackLink,
  GoBackLIst,
  CheakOutHeader,
  BillingDetails,
  BillingDetailsHeader,
  NameAndEmailDiv,
  NameDiv,
  NameLabel,
  NameInput,
  PhoneNumber,
  ShippingInfoHeader,
  ShppingInputDiv,
  ZipCodeContainer,
  PaymentMethodHeader,
  PaymentMethodDiv,
  ShippingAddress,
  PaymentMethod,
  PaymentOptionDiv,
  EMoney,
  EMoneyDiv,
  EmoneyTextDiv,
  EmoneyText,
  EmoneyNumAndPinDiv,
  EMoneyNumberLabel,
  EmoneyNumberInput,
  EmoneyNumAndPinCotainer,
  PinDiv,
  NumberDiv,
  MainContainer,
} from "./styles";

import Summary from "../Summary";
export default function index() {
  return (
    <>
      <MainContainer>
        <DetailsContainer>
          <GoBackLIst>
            <GoBackLink href="#">Go Back</GoBackLink>
          </GoBackLIst>
          <CheackOutDiv>
            <CheakOutHeader>CHECKOUT</CheakOutHeader>
            <BillingDetails>
              <BillingDetailsHeader>Billing Details</BillingDetailsHeader>
              <NameAndEmailDiv>
                <NameDiv>
                  <NameLabel>Name</NameLabel>
                  <br />
                  <NameInput type="text" placeholder="Alexei Ward" />
                </NameDiv>
                <NameDiv>
                  <NameLabel>Email</NameLabel>
                  <br />
                  <NameInput type="email" placeholder="alexei@mail.com" />
                </NameDiv>
              </NameAndEmailDiv>
              <PhoneNumber>
                <NameLabel>Phone Number</NameLabel>
                <br />
                <NameInput type="number" placeholder="+1 202-555-0136" />
              </PhoneNumber>
            </BillingDetails>
            {/* <ShippingInfo> */}
            <ShippingInfoHeader>shipping info</ShippingInfoHeader>
            <ShppingInputDiv>
              <NameLabel>Address</NameLabel> <br />
              <ShippingAddress
                type="address"
                placeholder=" 1137 Williams Avenue"
              />
              <ZipCodeContainer>
                <NameAndEmailDiv>
                  <NameDiv>
                    <NameLabel>ZIP Code</NameLabel>
                    <br />
                    <NameInput type="number" placeholder="10001" />
                  </NameDiv>
                  <NameDiv>
                    <NameLabel>City</NameLabel>
                    <br />
                    <NameInput type="city" placeholder="New York" />
                  </NameDiv>
                </NameAndEmailDiv>
                <PhoneNumber>
                  <NameLabel>Country</NameLabel>
                  <br />
                  <NameInput type="text" placeholder="United States" />
                </PhoneNumber>
              </ZipCodeContainer>
            </ShppingInputDiv>
            {/* </ShippingInfo> */}
            <PaymentMethodDiv>
              <PaymentMethodHeader>Payment Details</PaymentMethodHeader>
              <PaymentOptionDiv>
                <PaymentMethod>Payment Method</PaymentMethod>
                <EMoneyDiv>
                  <EmoneyTextDiv>
                    <EMoney type="radio" name="checkbox" />
                    <EmoneyText>e-Money</EmoneyText>
                  </EmoneyTextDiv>
                  <EmoneyTextDiv>
                    <EMoney type="radio" name="checkbox" />
                    <EmoneyText>Cash on Delivery</EmoneyText>
                  </EmoneyTextDiv>
                </EMoneyDiv>
              </PaymentOptionDiv>
            </PaymentMethodDiv>
            <EmoneyNumAndPinDiv>
              <EmoneyNumAndPinCotainer>
                <NumberDiv>
                  <EMoneyNumberLabel>e-Money Number</EMoneyNumberLabel>
                  <EmoneyNumberInput type="number" placeholder="238521993" />
                </NumberDiv>
                <PinDiv>
                  <EMoneyNumberLabel>e-Money PIN</EMoneyNumberLabel>
                  <EmoneyNumberInput type="number" placeholder="6891" />
                </PinDiv>
              </EmoneyNumAndPinCotainer>
            </EmoneyNumAndPinDiv>
          </CheackOutDiv>
        </DetailsContainer>
        <Summary />
      </MainContainer>
    </>
  );
}
