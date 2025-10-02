import { HandPhoneButton } from '../../../components/Botton/style'
import Header from '../../../components/Header'
import { HeroDiv,HandPhoneComponent,HandPhoneTaitle,HandPhoneHeader,HandPhoneLetter } from './styles'

export default function index() {
  return (
    <>
      <HeroDiv>
        <Header/>
          <HandPhoneComponent>
            <HandPhoneTaitle>NEW PRODUCT</HandPhoneTaitle>
            <HandPhoneHeader>
              XX99 MARK II <br /> HEADPHONES
            </HandPhoneHeader>
            <HandPhoneLetter>
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br /> enthusiast.
           </HandPhoneLetter>
           <HandPhoneButton>SEE PRODUCT </HandPhoneButton>
         </HandPhoneComponent>
        </HeroDiv>
    </>
  )
}
